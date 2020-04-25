import React, { Component } from 'react'

export default class Games extends Component {
    render() {
        return (
            <div className="games-desc">
			<p>
				Top games I've spent a lot of time playing <br/><br/>
			</p>
			<div className="game-content">
				<div className="game-section">
					{/* image source: https://store.steampowered.com/app/440/Team_Fortress_2/ */}
					<div className="game-img-section"><img className="game-img" src="images/games/tf2.jpg" alt="tf2"/></div><div className="game-content"><h2>Team Fortress 2</h2><p>Really the first game I invested a lot of time in and made online friends in!</p> <div>Hours: 717.0</div></div> 
				</div>
				<hr/>
			</div>
			<div className="game-content">
				<div className="game-section">
					{/* image source: https://store.steampowered.com/app/444090/Paladins/ */}
					<div className="game-img-section"><img className="game-img" src="images/games/paladins.jpg" alt="paladins"/></div><div className="game-content"><h2>Paladins</h2><p>Overwatch but for poor people.</p> <div>Hours: 107.0</div></div> 
				</div>
				<hr/>
			</div>
			<div className="game-content">
				<div className="game-section">
                {/*image source: https://store.steampowered.com/app/322330/Dont_Starve_Together/*/}
					<div className="game-img-section"><img className="game-img" src="images/games/dontstarvetog.jpg" alt="dst"/></div><div className="game-content"><h2>Don't Starve Together</h2><p>Don't starve!</p> <div>Hours: 71.0</div></div> 
				</div>
				<hr/>
			</div>
			<div className="game-content">
				<div className="game-section">
                    {/* image source: https://www.youtube.com/watch?v=kwoR1TKQF4Y */}
					<div className="game-img-section"><img className="game-img" src="images/games/osu.jpg" alt="osu"/></div><div className="game-content"><h2>Osu!</h2><p>Additing rhythm game...</p> <div>Hours: 62.0</div></div> 
				</div>
				<hr/>
			</div>
			<div className="game-content">
				<div className="game-section">
					{/* image source: https://store.steampowered.com/app/524220/NieRAutomata/ */}
					<div className="game-img-section"><img className="game-img" src="images/games/nier.jpg" alt="nier"/></div><div className="game-content"><h2>NieR:Automata</h2><p>My favorite game!</p> <div>Hours: 39.0</div></div> 
				</div>
				<hr/>
			</div>
			<div className="game-content">
				<div className="game-section">
					{/* image source: https://store.steampowered.com/app/291860/Pit_People/ */}
					<div className="game-img-section"><img className="game-img" src="images/games/pitpeople.jpg" alt="pitpeople"/></div><div className="game-content"><h2>Pit People</h2><p>Been playing this a lot! Love Behemoth games</p> <div>Hours: 21.0</div></div> 
				</div>
				<hr/>
			</div>

		</div>
        )
    }
}
