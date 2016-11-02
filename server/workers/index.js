import Cookie from "../config/cookie.js";
import request from "superagent";

const endpoints = {
	leaderBoard : [
			'https://www.codingame.com/services/LeaderboardsRemoteService/getGlobalLeaderboard',
			[1,{"keyword":"","active":false,"column":"","filter":""},"5e3be401f372396cc012b9b9c9a9e4d92459051",true,"company"]
		],
	linkedAchievements : 'https://www.codingame.com/services/PuzzleRemoteService/findProgressByPrettyId',
	allPlayerAchievements : 'https://www.codingame.com/services/AchievementRemoteService/findByCodingamerId',
};

const workersInitializer = function(){
	
	request
		.post(endpoints.leaderBoard[0])
		.set('Content-Type', 'application/json')
		.send(endpoints.leaderBoard[1])
		.end(
			function(err, response){
				console.log(err);
				console.log(response.text);
			}
		)

};

export { workersInitializer };