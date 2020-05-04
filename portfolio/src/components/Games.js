import React, { Component } from 'react'
import GameContent from './GameContent'

export default class Games extends Component {
	
    render() {
		const games = [
			{
				imageSrcLink: "/* image source: https://store.steampowered.com/app/440/Team_Fortress_2/ */",
				imageSrc: "images/games/tf2.jpg",
				alt: "tf2",
				header: "Team Fortress 2",
				desc: "Really the first game I invested a lot of time in and made online friends in!",
				hours: "717.0"
			},
			{
				imageSrcLink: "/* image source: https://store.steampowered.com/app/444090/Paladins/ */",
				imageSrc: "images/games/paladins.jpg",
				alt: "paladins",
				header: "Paladins",
				desc: "Overwatch but for poor people.",
				hours: "107.0"
			},
			{
				imageSrcLink: "/*image source: https://store.steampowered.com/app/322330/Dont_Starve_Together/*/",
				imageSrc: "images/games/dontstarvetog.jpg",
				alt: "dst",
				header: "Don't Starve Together",
				desc: "Don't starve!",
				hours: "71.0"
			},
			{
				imageSrcLink: "/* image source: https://www.youtube.com/watch?v=kwoR1TKQF4Y */",
				imageSrc: "images/games/osu.jpg",
				alt: "osu",
				header: "Osu!",
				desc: "Additing rhythm game...",
				hours: "62.0"
			},
			{
				imageSrcLink: "/* image source: https://store.steampowered.com/app/524220/NieRAutomata/ */",
				imageSrc: "images/games/nier.jpg",
				alt: "nier",
				header: "NieR:Automata",
				desc: "My favorite game!",
				hours: "39.0"
			},
			{
				imageSrcLink: "/* image source: https://store.steampowered.com/app/291860/Pit_People/ */",
				imageSrc: "images/games/pitpeople.jpg",
				alt: "pitpeople",
				header: "Pit People",
				desc: "Been playing this a lot! Love Behemoth games",
				hours: "21.0"
			},
		]

		const gameContents = games.map((game, i) => (
            <GameContent key={i} imageSrcLink={game.imageSrcLink} imageSrc={game.imageSrc} 
			alt={game.alt} header={game.header} desc={game.desc} hours={game.hours}/>
		))
		
        return (
            <div className="games-desc">
			<p>
				Top games I've spent a lot of time playing <br/><br/>
			</p>
			{gameContents}
		</div>
        )
    }
}
