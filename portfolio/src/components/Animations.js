/* eslint-disable */ 
import React, { Component } from 'react'

export default class Animations extends Component {
    render() {
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
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/mxUWu3R1gfY" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/-LTjw3PzcbM" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/OSUInLwSLZk" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile"> 
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/NDjoVprETPU" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/WI5rnuVwPzM" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/SA6i70dufHE" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/t54evWM43tE" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="tile">
                                <iframe className="tile__vid" src="https://www.youtube.com/embed/IWK_Ahh6OSA" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
			    </div>
            </div>

        )
    }
}
