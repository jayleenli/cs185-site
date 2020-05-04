/* eslint-disable */ 
import React, { Component } from 'react'
import AnimationsTile from './AnimationsTile'

export default class Animations extends Component {
    render() {
        const videos = [
            { link: "https://www.youtube.com/embed/mxUWu3R1gfY" },
            { link: "https://www.youtube.com/embed/-LTjw3PzcbM" },
            { link: "https://www.youtube.com/embed/OSUInLwSLZk" },
            { link: "https://www.youtube.com/embed/NDjoVprETPU" },
            { link: "https://www.youtube.com/embed/WI5rnuVwPzM" },
            { link: "https://www.youtube.com/embed/SA6i70dufHE" },
            { link: "https://www.youtube.com/embed/t54evWM43tE" },
            { link: "https://www.youtube.com/embed/IWK_Ahh6OSA" }
        ]

        const videoTiles = videos.map((video, i) => (
            <AnimationsTile key={i} videoLink={video.link}/>
        ))

        return (
            <div>
                <div className="animations-desc">
                    <p>I used to make some dumb humor animations in high school so here's a video gallery of them. Scroll sideways (SHIFT+scroll) to see more! <br/><br/></p>
                    
                </div>
                <center>
                    <a href="https://www.youtube.com/user/tjtheturtleisawesome" target="_blank" className="tube-btn">YouTube Channel: tjtheturtleisawesome</a>
                </center>
                
                {/*Video slider CSS edited from https://codepen.io/netk/pen/ZpERkb*/}
                <div className="contain_archive">
                    <div className="row_nm_videos">
                        <div className="row__inner">
                            {videoTiles}
                        </div>
                    </div>
			    </div>
            </div>

        )
    }
}
