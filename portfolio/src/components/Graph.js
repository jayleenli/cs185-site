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
        let ref = firebase.database().ref('movies').limitToFirst(2)
        ref.once('value', snapshot => {
            const data = snapshot.val()

            console.log(data)
            //const movieKeys = Object.keys(data)
            //let ref = firebase.database().ref('graphViz')limitToFirst(2)
            //ref.once('value', snapshot => {

            this.processData(data);
            this.setState({
                firebaseGraphData: data
            })
            
            const svgGraphElem = document.getElementById("svgMovieGraph");
            const links = [{
                source: 1,
                target: 0
            }]
            svgGraphElem.appendChild(this.chart(this.state.movieNodes, this.state.linkNodes));
        
            
        })

        /*const links = [{
            source: 1,
            target: 0
        }]
        const dummy_nodes = [
            {
                name:"hi"
            },
            {
                name:"hi2"
            }
        ]
        const svgGraphElem = document.getElementById("svgMovieGraph");
        svgGraphElem.appendChild(this.chart(dummy_nodes, links));
        */
        
    }

    chart(nodes, links) {
        const width = 1920;
        const height = 1080;

        const obj_links = links.map(d => Object.create(d));
        const obj_nodes = nodes.map(d => Object.create(d));

        console.log(nodes);
        console.log(links);

        const svg_graph = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);

        //force simulation from discussion
        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(links).id(d => { return d.index; }).distance(400))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width/2, height/2));
        

        const link = svg_graph.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", 2)



        //Define images for svg circles
        var defs = svg_graph.append("defs")

        const radius = (node) => {
            if(node.group == "movie") {
                return 100;
            }
            return 20;
        }
        const nodePoster = (node) => {
            if (node.group == "movie") {
                defs.append('pattern')
                    .attr('id', 'img_'+node.id)
                    .attr('patternUnits', 'objectBoundingBox')
                    .attr('width', 2)
                    .attr('height', 2)
                .append('image')
                    .attr('xlink:href', node.poster)
                    .attr("width", 200)
                    .attr("height", 200)
                    .attr("x", node.cx)
                    .attr("y", node.cy);

                return "url(#img_" + node.id+ ")"
            }
            return d3.color("steelblue")
        }

        const node = svg_graph.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", nodePoster)
            .call(this.drag(simulation));
        
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
        
    return svg_graph.node();
    }
    //Drag code from section
    drag = (simulation) => {
        function dragStarted(d) {
            //check if active, don't wanna trigger it multiple times
            //alphaTarget set how much effect drag should have
            if(!d3.event.active) {
                simulation.alphaTarget(0,3).restart();
                console.log("restart")
            }
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
            if(!d3.event.active) {
                simulation.alphaTarget(0);
                console.log("end")
            }
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
        var links = [];
        var movieindex = 0;
        const keys = Object.keys(data);
        //Only need actors, movie poster, movie name, movie id
        for (var i = 0; i < keys.length; i++) {
            const movieID = keys[i];
            var movieNode = {}
            var movieActors =  oldData[movieID]["Actors"]
            var actorsArray = this.processActorsString(movieActors);

            movieNode["poster"] = oldData[movieID]["Poster"];
            movieNode["name"] = oldData[movieID]["Title"];
            movieNode["id"] = movieID;
            movieNode["group"] = "movie"; //"movie"
            movieNode["numActors"] = actorsArray.length;
            nodes.push(movieNode)
            movieindex = nodes.length-1;
            
            //Create nodes for the actors Array
            for (var j = 0; j < actorsArray.length; j++) {
                var actorNode = {}
                
                actorNode["name"] = actorsArray[j];
                actorNode["group"] = "actor";
                nodes.push(actorNode)

                var actorLink = {}
                actorLink["source"] = nodes.length-1;
                actorLink["target"] = movieindex;

                links.push(actorLink)
            }
        }
        this.setState({
            movieNodes: nodes,
            linkNodes: links
        })
    }

    processActorsString(actorsString) {
        var actorsArr = actorsString.split(", ");
        return actorsArr
    }


    render() {
        return (
            <div id="svgMovieGraph">
                
            </div>
        )
    }
}
