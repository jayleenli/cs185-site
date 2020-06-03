import React, { Component } from 'react'
import config from '../config';
import { svg } from 'd3';
const firebase = require('firebase')
var d3 = require("d3");

export default class Graph extends Component {
    constructor() {
        super();
        this.state = {
            firebaseGraphData: {},
            movieNodes: {},
            linkNodes: {}
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        } 

        //load movies
        let ref = firebase.database().ref('movies').orderByKey().limitToFirst(2)
        ref.once('value', snapshot => {
            const data = snapshot.val()

            this.setState({
                firebaseGraphData: data
            })

            console.log(data)
            this.processData(data);

            const svgGraphElem = document.getElementById("svgMovieGraph");
            const links = [{
                source: 1,
                target: 0
            }]
            svgGraphElem.appendChild(this.chart(this.state.movieNodes, links));
        
            
        })

        
    }

    chart(nodes, links) {
        const width = 1920;
        const height = 1080;

        const obj_links = links.map(d => Object.create(d));
        const obj_nodes = nodes.map(d => Object.create(d));

        const svg_graph = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);

        //force simulation from discussion
        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => { return d.index; }).distance(200))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));
        
        
        simulation.on("tick", () => {
            link   
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        });

        const link = svg_graph.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", 2)

        const color = (node) => {
            if(node.group == "movie") {//movie
                return d3.color("pink");
            }
            return d3.color("steelblue");
        }

        const radius = (node) => {
            if(node.group == "movie") {
                return 40;
            }
            return 20;
        }

        const node = svg_graph.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", color)
            .call(this.drag(simulation));
            
        return svg_graph.node();
    }

    //Drag code from section
    drag = (simulation) => {
        function dragStarted(d) {
            //check if active, don't wanna trigger it multiple times
            //alphaTarget set how much effect drag should have
            if(!d3.event.active) simulation.alphaTarget(0,3).restart();
            d.fx = d.x;
            d.fy = d.y;
            //the fx and fy permantly changes the location to the cursor
        }

        function dragged(d) {
            //put the position to the position of the event (simulation)
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragEnded(d) {
            //undo the force applied previously, so when the other node pulls it, it will be pulled back
            if(!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
    }

    processData(data) {
        var oldData = data;
        var nodes = [];
        const keys = Object.keys(data);
        //Only need actors, movie poster, movie name, movie id
        for (var i = 0; i < keys.length; i++) {
            const movieID = keys[i];
            var newData = {}
            
            var movieActors =  oldData[movieID]["Actors"]
            var newActorLink = this.processActorsString(movieActors, movieID);

            newData["poster"] = oldData[movieID]["Poster"];
            newData["name"] = oldData[movieID]["Title"];
            newData["id"] = movieID;
            newData["group"] = "movie"; //"movie"
            nodes.push(newData)
        }
        this.setState({
            movieNodes: nodes
        })
    }

    processActorsString(actorsString, movieID) {
        var actorsArr = actorsString.split(", ");
        console.log(actorsArr);

    }


    render() {
        return (
            <div id="svgMovieGraph">
                
            </div>
        )
    }
}
