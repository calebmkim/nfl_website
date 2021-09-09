import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import _ from 'lodash';
import './nflAnalyzer.css'
import TopBar from './TopBar.jsx'

import BUF from './images/BUF.png'; 
import NYJ from './images/NYJ.png';
import NE from './images/NE.png';
import MIA from './images/MIA.png';

import BAL from './images/BAL.png';
import PIT from './images/PIT.png';
import CLE from './images/CLE.png';
import CIN from './images/CIN.png';

import IND from './images/IND.png';
import HOU from './images/HOU.png';
import TEN from './images/TEN.png';
import JAC from './images/JAC.png';

import KC from './images/KC.png';
import LAC from './images/LAC.png';
import LV from './images/LV.png';
import DEN from './images/DEN.png';

import GB from './images/GB.png';
import CHI from './images/CHI.png';
import DET from './images/DET.png';
import MIN from './images/MIN.png';

import NYG from './images/NYG.png';
import WFT from './images/WFT.png';
import DAL from './images/DAL.png';
import PHI from './images/PHI.png';

import TB from './images/TB.png';
import NO from './images/NO.png';
import CAR from './images/CAR.png';
import ATL from './images/ATL.png';

import LAR from './images/LAR.png';
import SEA from './images/SEA.png';
import SF from './images/SF.png';
import ARI from './images/ARI.png';

const pictureObj = {'BUF': BUF, 'NE': NE, 'MIA': MIA, 'NYJ': NYJ,
'PIT': PIT,'CLE': CLE,'CIN': CIN,'BAL': BAL,
'IND': IND,'JAC': JAC,'HOU': HOU,'TEN': TEN,
'KC': KC,'LV': LV,'LAC': LAC,'DEN': DEN,
'GB': GB,'DET': DET,'MIN': MIN,'CHI': CHI,
'WFT': WFT,'NYG': NYG,'PHI': PHI,'DAL': DAL,
'NO': NO,'TB': TB,'ATL': ATL,'CAR': CAR,
'SEA': SEA,'LAR': LAR,'ARI': ARI,'SF': SF }

const weekDict = {'Week 1': 0, 'Week 2': 1, 'Week 3': 2, 'Week 4': 3, 'Week 5': 4,
'Week 6': 5, 'Week 7': 6, 'Week 8': 7, 'Week 9': 8, 'Week 10': 9, 'Week 11': 10
, 'Week 12': 11, 'Week 13': 12, 'Week 14': 13, 'Week 15': 14, 'Week 16': 15, 'Week 17': 16
, 'Week 18': 17 }

const divisions = {"AFC": {"North": ["BAL", "CIN", "CLE", "PIT"], 
"South": ["HOU", "IND", "JAC", "TEN"],"East": ["BUF", "MIA", "NE", "NYJ"],
"West": ["DEN", "KC", "LAC", "LV"]}, 
"NFC": {"North": ["CHI", "DET", "GB", "MIN"],"South": ["ATL", "CAR", "NO", "TB"],
"East": ["DAL", "NYG", "PHI", "WFT"],"West": ["ARI", "LAR", "SEA", "SF"]}
}

const scheduleJson = require('./schedule.json') 

const myStyle={
  width:'90%',
  height:'80%',
  };

class Game extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    var awaySrc = pictureObj[this.props.away]
    var homeSrc = pictureObj[this.props.home]
    var awayStyleReg = 'regButton ' + this.props.away 
    var awayStyleBold = 'boldButton ' + this.props.away
    var homeStyleReg = 'regButton ' + this.props.home
    var homeStyleBold = 'boldButton ' + this.props.home 
    if (this.props.winner == this.props.away){
      return(
        <div>
        <button className = {awayStyleBold}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleReg}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
        </div>
      )
    }
    else if (this.props.winner ==this.props.home){
      return(
        <div>
        <button className = {awayStyleReg}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleBold}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
  
        </div>
      )
    }
    else{
      return(
        <div>
        <button className = {awayStyleReg}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleReg}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
        </div>
      )
    }
  }
}

class Playoffgame extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.home === null && this.props.away === null){
      return( 
        <div>
        <button className = {'tbdButton'}>
        TBD
        </button>
        @
        <button className = {'tbdButton'}>
        TBD
        </button>
        </div>
    )
    }
    var awaySrc = pictureObj[this.props.away]
    var homeSrc = pictureObj[this.props.home]
    var awayStyleReg = 'regButton ' + this.props.away 
    var awayStyleBold = 'boldButton ' + this.props.away
    var homeStyleReg = 'regButton ' + this.props.home
    var homeStyleBold = 'boldButton ' + this.props.home 
    if (this.props.winner == this.props.away){
      return(
        <div>
        <button className = {awayStyleBold}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleReg}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
        </div>
      )
    }
    else if (this.props.winner ==this.props.home){
      return(
        <div>
        <button className = {awayStyleReg}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleBold}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
  
        </div>
      )
    }
    else{
      return(
        <div>
        <button className = {awayStyleReg}
        onClick = {this.props.awayOnClick}>
        {this.props.away}
        <input type="image" style = {myStyle} src={awaySrc}/>
        </button>
        @
        <button className = {homeStyleReg}
        onClick = {this.props.homeOnClick}>
        {this.props.home}
        <input type="image" style = {myStyle} src={homeSrc} />
        </button>
        </div>
      )
    }
        
    
  }

}

export default class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showPlayoffs: false,
      showWeek: true,
      showStandings: false,
      updateStandings: false,
      curWeek: 0,
      playoffTeams:{"AFC":[], "NFC":[]},
      teams:{"BUF": {"W":[],"L": []}, "NE": {"W": [], "L": []}, 
      "MIA": {"W": [], "L": []}, "NYJ": {"W": [], "L": []},

      "PIT": {"W":[],"L": []},"BAL": {"W":[],"L": []},"CLE": {"W":[],"L": []},
      "CIN": {"W":[],"L": []},

      "TEN": {"W":[],"L": []},"IND": {"W":[],"L": []},"HOU": {"W":[],"L": []},
      "JAC": {"W":[],"L": []},

      "KC": {"W":[],"L": []},"LV": {"W":[],"L": []},"LAC": {"W":[],"L": []},
      "DEN": {"W":[],"L": []},

      "WFT": {"W":[],"L": []},"NYG": {"W":[],"L": []},"DAL": {"W":[],"L": []},
      "PHI": {"W":[],"L": []},

      "GB": {"W":[],"L": []},"CHI": {"W":[],"L": []},"MIN": {"W":[],"L": []},
      "DET": {"W":[],"L": []},

      "NO": {"W":[],"L": []},"TB": {"W":[],"L": []},"CAR": {"W":[],"L": []},
      "ATL": {"W":[],"L": []},

      "SEA": {"W":[],"L": []},"LAR": {"W":[],"L": []},"ARI": {"W":[],"L": []},
      "SF": {"W":[],"L": []},
    },
      games:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
      playoffGames:{"NFC":[ [], [], []], "AFC":[ [], [], []], "SB": [[]]}
    }; 
    this.addWeeks()
  }

  addWeeks(){
    for (let teamNum in scheduleJson){
      var schedule = Object.values(scheduleJson[teamNum])
      var baseTeam = schedule[0]
      for (let opp =1; opp < schedule.length; opp++){  
        var opponent = schedule[opp].split(" ")
        let game = {}
        if (opponent.length > 1){
            game = {"away": baseTeam, "home": opponent[1], "winner": null, "loser": null}
        }
        else{
            if (opponent[0] != "BYE"){
              game = {"away": opponent[0], "home": baseTeam, "winner":null, "loser":null}
            }
        }
        if (!_.isEmpty(game) && !this.gameAlreadyIncluded(game)){
          this.state.games[opp-1].push(game)
        }
      }
    }
  }

  gameAlreadyIncluded(game){
    for (let weekNum in this.state.games){
      for (let gameNum in this.state.games[weekNum]){
        if (this.isSameGame(this.state.games[weekNum][gameNum], game)){
          return true 
        }
      }
    }
    return false 
  }

  isSameGame(game1, game2){
    return game1["home"] == game2["home"] && game1["away"] == game2["away"]
  }

  handleClick(week, number, giveAwayWin){
      var copyGames = this.state.games.slice(); 
      var awayTeam = copyGames[week][number]["away"]
      var homeTeam = copyGames[week][number]["home"]
      var game = copyGames[week][number]
      if (giveAwayWin){
        copyGames[week][number]["winner"] = awayTeam
        copyGames[week][number]['loser'] = homeTeam
      }
      else{
        copyGames[week][number]["winner"] = homeTeam
        copyGames[week][number]['loser'] = awayTeam 
      }
      this.setState({
        games: copyGames,
      });

  }

  containsWin(team,game){
    if (this.state.teams[team]["W"].includes(game)){
        return true; 
    }
    return false; 
  }

  containsLoss(team, game){
    if (this.state.teams[team]["L"].includes(game)){
    return true; 
    }
    return false; 
  }

  renderGame(week, number){
    return (
      <Game
       key = {week, number}
       away =  {this.state.games[week][number]['away']}
       home = {this.state.games[week][number]['home']}
       winner = {this.state.games[week][number]['winner']}
       awayOnClick = {() => this.handleClick(week, number, true)}
       homeOnClick = {() => this.handleClick(week, number, false)}
      />
    )
  }

  renderPlayoffGames(conf, round, number){
    return (
      <Playoffgame
       key = {conf, round, number}
       away =  {this.state.playoffGames[conf][round][number]['away']}
       home = {this.state.playoffGames[conf][round][number]['home']}
       winner = {this.state.playoffGames[conf][round][number]['winner']}
       awayOnClick = {() => this.handleClickPlayoff(conf, round, number, true)}
       homeOnClick = {() => this.handleClickPlayoff(conf, round, number, false)}
      />
    )
  }

  handleClickPlayoff(conf, round, number, giveAwayWin){
    var copyGames = _.cloneDeep(this.state.playoffGames); 
    var awayTeam = copyGames[conf][round][number]["away"]
    var homeTeam = copyGames[conf][round][number]["home"]
    if (giveAwayWin){
      copyGames[conf][round][number]["winner"] = awayTeam
      copyGames[conf][round][number]['loser'] = homeTeam
    }
    else{
      copyGames[conf][round][number]["winner"] = homeTeam
      copyGames[conf][round][number]['loser'] = awayTeam 
    }

    if (round === 0 && conf !== 'SB'){
      if (this.wildCardDone("NFC", copyGames)){
        this.setDivisionalGames("NFC", copyGames)
      }
      if (this.wildCardDone("AFC", copyGames)){
        this.setDivisionalGames("AFC", copyGames)
      }
      if (this.divisionalDone("NFC", copyGames)){
        this.setConferenceChamps("NFC", copyGames)
      }
      if (this.divisionalDone("AFC", copyGames)){
        this.setConferenceChamps("AFC", copyGames)
      }
      if (this.confDone("NFC", copyGames) && this.confDone("AFC", copyGames)){
        this.setSB(copyGames)
      }
    }
    if (round === 1){
      if (this.divisionalDone("NFC", copyGames)){
        this.setConferenceChamps("NFC", copyGames)
      }
      if (this.divisionalDone("AFC", copyGames)){
        this.setConferenceChamps("AFC", copyGames)
      }
      if (this.confDone("NFC", copyGames) && this.confDone("AFC", copyGames)){
        this.setSB(copyGames)
      }
    }
    if (round === 2){
      if (this.confDone("NFC", copyGames) && this.confDone("AFC", copyGames)){
        this.setSB(copyGames)
      }
    }
      this.setState({
        playoffGames: copyGames,
      })
    
  }

  confDone(conf, pGames){
    var ans = true 
    if (pGames[conf][2].length < 1){
      ans = false 
    }
    pGames[conf][2].forEach(game => {
      if (game['winner'] === null){
        ans = false
      }
    })
    return ans 
  }

  divisionalDone(conf, pGames){
    var ans = true 
    if (pGames[conf][1].length < 2){
      ans = false 
    }
    pGames[conf][1].forEach(game => {
      if (game['winner'] === null){
        ans = false
      }
    })
    return ans 
  }

  wildCardDone(conf, pGames){
    var ans = true 
    if (pGames[conf][0].length < 3){
      ans = false 
    }
    pGames[conf][0].forEach(game => {
      if (game['winner'] === null){
        ans = false
      }
    })
    return ans 
  }

  createEmptyTeams(){
    var teams = {"BUF": {"W":[],"L": []}, "NE": {"W": [], "L": []}, 
      "MIA": {"W": [], "L": []}, "NYJ": {"W": [], "L": []},

      "PIT": {"W":[],"L": []},"BAL": {"W":[],"L": []},"CLE": {"W":[],"L": []},
      "CIN": {"W":[],"L": []},

      "TEN": {"W":[],"L": []},"IND": {"W":[],"L": []},"HOU": {"W":[],"L": []},
      "JAC": {"W":[],"L": []},

      "KC": {"W":[],"L": []},"LV": {"W":[],"L": []},"LAC": {"W":[],"L": []},
      "DEN": {"W":[],"L": []},

      "WFT": {"W":[],"L": []},"NYG": {"W":[],"L": []},"DAL": {"W":[],"L": []},
      "PHI": {"W":[],"L": []},

      "GB": {"W":[],"L": []},"CHI": {"W":[],"L": []},"MIN": {"W":[],"L": []},
      "DET": {"W":[],"L": []},

      "NO": {"W":[],"L": []},"TB": {"W":[],"L": []},"CAR": {"W":[],"L": []},
      "ATL": {"W":[],"L": []},

      "SEA": {"W":[],"L": []},"LAR": {"W":[],"L": []},"ARI": {"W":[],"L": []},
      "SF": {"W":[],"L": []},
    }
    return teams 
  }

  updateRecords(){
      var newTeams = this.createEmptyTeams()
      for (var weekNum in this.state.games){
        for (var gameNum in this.state.games[weekNum]){
          var game = this.state.games[weekNum][gameNum]
          if (game["winner"] !== null && game["loser"] !== null){
            newTeams[game["winner"]]["W"].push(game)
            newTeams[game["loser"]]["L"].push(game)
          }
        } 
      } 
      this.setState({updateStandings: false,
                      teams: newTeams})
  }

  createStandings(){
    var fullStandings = [];
    if (this.state.showStandings === true){
      fullStandings.push(this.createConferenceStandings("NFC"))
      fullStandings.push(this.createConferenceStandings("AFC"))
    }
    return fullStandings 
  }

  createConferenceStandings(conference){
      var conferenceRep = <div key = {conference} className = 'conferenceStandings'>
        {this.createDivisionStandings(conference, "North")}
        {this.createDivisionStandings(conference, "South")}
        {this.createDivisionStandings(conference, "East")}
        {this.createDivisionStandings(conference, "West")}
      </div>
      return conferenceRep 
  }

  createDivisionStandings(conference, division){
      var divisionStandings = []
      var divisionHeader = <div>
        {conference + " " + division}
      </div>
      var divisionArray = this.getDivArray(conference, division)
      divisionArray.forEach( element => {
        var teamRep = <div key ={element}>
          {element}: 
          {this.state.teams[element]["W"].length} -  {this.state.teams[element]["L"].length}
        </div>
        divisionStandings.push(teamRep)
      })
      var divisionDisplay = <div className = 'divisionStandings'>
          {divisionHeader}
          {divisionStandings}
      </div>
      return divisionDisplay 
  }

  getDivArray(conference, division){
      var divisionArray = []
      divisions[conference][division].forEach(element => divisionArray.push(element))
      divisionArray.sort((a,b)=> this.orderTeamsDivision(a,b))
      return divisionArray
  }

  orderTeamsDivision(a, b){
    var winPercentDif = (this.getWinPercent(b)) - (this.getWinPercent(a))
    if (winPercentDif !== 0){return winPercentDif}
    return (this.getDivisionWinPercent(b)) - (this.getDivisionWinPercent(a))
  }

  getWinPercent(team){
    var wins = this.state.teams[team]["W"].length
    var losses = this.state.teams[team]["L"].length
    if (wins + losses === 0) {
      return 0
    }
    return (wins) / (wins+losses)
  }

  getDivisionWinPercent(team){
    var wins = 0;
    var losses = 0;
    this.state.teams[team]["W"].forEach(game => {
      var opponent = this.getOpponent(team, game)
      if (this.inSameDivision(team, opponent)){
        wins++
      }
    })
    this.state.teams[team]["L"].forEach(game => {
      var opponent = this.getOpponent(team, game)
      if (this.inSameDivision(team, opponent)){
        losses++
      }
    })
    if ((wins + losses) == 0){return 0}
    return (wins)/ (wins + losses)
  }

  getOpponent(team, game){
    if (game["home"] === team){
      return game["away"]
    }
    return game["home"]
  }

  inSameDivision(team1, team2){
    var divArray = []
    for (var conference in divisions){
      for (var direction in divisions[conference]){
        for (var team in divisions[conference][direction]){
          var teamName = divisions[conference][direction][team]
            if (teamName == team1 || teamName == team2){
              divArray = divisions[conference][direction]
            }
        }
      }
    }
    var team1In = false 
    var team2In = false
    divArray.forEach((element) => {
      if (element == team1){
        team1In = true
      }
      if (element == team2){
        team2In = true
      }
    })
    return team1In && team2In
  }

  renderWeek(weekNum){
    var fullSchedule = []
    if (this.state.showWeek === true){
      for (let gameNum in this.state.games[weekNum]){
        fullSchedule.push(this.renderGame(weekNum, gameNum))
      }
    }
    return fullSchedule
  }
  
  renderPlayoffs(){
    var playoffsWC = []
    var playoffsDiv = []
    var conferenceChamps = []
    var SB = []
    if (this.state.showPlayoffs === true){
      for (var game in this.state.playoffGames["NFC"][0]){
         playoffsWC.push(this.renderPlayoffGames("NFC",0, game))
      }
      for (var game in this.state.playoffGames["AFC"][0]){
        playoffsWC.push(this.renderPlayoffGames("AFC",0, game))
     }
      for (var game in this.state.playoffGames["NFC"][1]){
        playoffsDiv.push(this.renderPlayoffGames("NFC",1 , game))
      }
      for (var game in this.state.playoffGames["AFC"][1]){
        playoffsDiv.push(this.renderPlayoffGames("AFC",1 , game))
      }
      for (var game in this.state.playoffGames["NFC"][2]){
        conferenceChamps.push(this.renderPlayoffGames("NFC", 2, game))
      }
      for (var game in this.state.playoffGames["AFC"][2]){
        conferenceChamps.push(this.renderPlayoffGames("AFC", 2, game))
      }
      for (var game in this.state.playoffGames["SB"][0]){
        SB.push(this.renderPlayoffGames("SB", 0, game))
      }
    }
    var po = <div>
      <div className = "playoffRound">
        {playoffsWC}
      </div >
      <div className = "playoffRound">
        {playoffsDiv}
      </div>
      <div className = "playoffRound">
        {conferenceChamps}
      </div>
      <div className = "playoffRound">
        {SB}
      </div>
    </div> 
    return po
  }

  generatePlayoffs(){
      var nfcTeams = this.getPlayoffTeams("NFC")
      var afcTeams = this.getPlayoffTeams("AFC")
      var plTeams = {"NFC": nfcTeams, "AFC": afcTeams}
      var playoffGamesCopy = {"NFC":[ [], [], []], "AFC":[ [], [], []], "SB": [[]]}
      this.setWildCardsGames("NFC", nfcTeams, playoffGamesCopy)
      this.setWildCardsGames("AFC", afcTeams, playoffGamesCopy)
      this.setState({playoffGames: playoffGamesCopy})
      this.setState({playoffTeams: plTeams})

  }

  setSB(copyGames){
    var team1 = copyGames["AFC"][2][0].winner
    var team2 = copyGames["NFC"][2][0].winner
    copyGames["SB"] = [[]]
    var sb = {'away': team1, 'home': team2, "winner": null, "loser": null}
    console.log(sb)
    copyGames["SB"][0].push(sb)
  }
  setConferenceChamps(conf, copyGames){
    var winner1 = copyGames[conf][1][0].winner
    var winner2 = copyGames[conf][1][1].winner

    var index1 = this.state.playoffTeams[conf].indexOf(winner1)
    var index2 = this.state.playoffTeams[conf].indexOf(winner2)

    var teamsArr = [{name: winner1, index: index1}, 
      {name: winner2, index: index2},]
    teamsArr.sort((a,b)=> a.index - b.index)

    copyGames[conf][2] = []

    var game1 = {'away': teamsArr[1].name, 'home': teamsArr[0].name, "winner": null, "loser": null}
    copyGames[conf][2].push(game1)
  }

  setDivisionalGames(conf, copyGames){
      var teamsCopy = this.state.playoffTeams

      var winner1 = copyGames[conf][0][0].winner
      var winner2 = copyGames[conf][0][1].winner
      var winner3 = copyGames[conf][0][2].winner
      var index1 = this.state.playoffTeams[conf].indexOf(winner1)
      var index2 = this.state.playoffTeams[conf].indexOf(winner2)
      var index3 = this.state.playoffTeams[conf].indexOf(winner3)

      var teamsArr = [{name: winner1, index: index1}, 
        {name: winner2, index: index2}, 
        {name: winner3, index: index3}]
      teamsArr.sort((a,b)=> a.index - b.index)

      copyGames[conf][1] = []

      var game1 = {'away': teamsArr[2].name, 'home': teamsCopy[conf][0], "winner": null, "loser": null}
      var game2 = {'away': teamsArr[1].name, 'home': teamsArr[0].name, "winner": null, "loser": null}
      copyGames[conf][1].push(game1)
      copyGames[conf][1].push(game2)
  }

  setWildCardsGames(conf, teamArr,playoffGames){
    var game1 = {"away": teamArr[6], "home": teamArr[1], "winner": null, "loser": null}
    var game2 = {"away": teamArr[5], "home": teamArr[2], "winner": null, "loser": null}
    var game3 = {"away": teamArr[4], "home": teamArr[3], "winner": null, "loser": null}
    playoffGames[conf][0].push(game1)
    playoffGames[conf][0].push(game2)
    playoffGames[conf][0].push(game3)
  }

  getPlayoffTeams(conference){
    var champs = this.getDivChamps(conference)
    var wildCards = this.getWildCards(conference)
    var allTeams = champs.concat(wildCards)
    return allTeams
  }

  getDivChamps(conf){
      var divChamps = []
      divChamps.push(this.getDivArray(conf, "North")[0])
      divChamps.push(this.getDivArray(conf, "South")[0])
      divChamps.push(this.getDivArray(conf, "West")[0])
      divChamps.push(this.getDivArray(conf, "East")[0])
      divChamps.sort((a,b) => this.orderTeamsConference(a,b))
      return divChamps 
  }

  getWildCards(conf){
    var teamPool = []
    divisions[conf]["North"].forEach(team => teamPool.push(team))
    divisions[conf]["South"].forEach(team => teamPool.push(team))
    divisions[conf]["East"].forEach(team => teamPool.push(team))
    divisions[conf]["West"].forEach(team => teamPool.push(team))
    var divChamps = this.getDivChamps(conf)
    divChamps.forEach(team => {
      var index = teamPool.indexOf(team)
      teamPool.splice(index,1)
    })
    teamPool.sort((a,b) => this.orderTeamsConference(a,b))
    return teamPool.slice(0,3)
  }

  orderTeamsConference(a, b){
    var winPercentDif = (this.getWinPercent(b)) - (this.getWinPercent(a))
    return winPercentDif
  }

  onDropDownChange(value){
    this.setState({curWeek: value})
  }

  onDropDownSelect(){
    this.setState({showStandings:false})
    this.setState({showWeek:true})
    this.setState({showPlayoffs:false})
  }

  onGenerateStandings(){
    this.setState({showStandings: true})
    this.setState({showWeek: false})
    this.setState({showPlayoffs:false})
    this.updateRecords()
  }
  
  onGoToPlayoffs(){
    this.updateRecords()
    this.generatePlayoffs()
    this.setState({showWeek:false})
    this.setState({showStandings:false})
    this.setState({showPlayoffs: true})
    
  }
  render() {
    var topbar = <TopBar 
                  onChange = {(value) =>  this.onDropDownChange(value)}
                  generateStandings ={() => this.onGenerateStandings()}
                  onSelect = { () => this.onDropDownSelect()}
                  makePlayoffs = {() => this.onGoToPlayoffs()} />
    var weekNum = weekDict[this.state.curWeek.value]
    return (
      <div className = "setup"> 
        {topbar}
        <div className="Schedule">
          <div className ='week'>
             {this.renderWeek(weekNum)}
          </div>      
        </div>
        <div className = "standings">
          {this.createStandings()}
        </div>
        <div className = "playoffs">
          {this.renderPlayoffs()}
        </div>
        <div className = 'about'>
          About the Website: <br></br>
          This website allows the user to predict his or her own NFL season for the upcoming 
          year (2021-2022). 
          Simply go through each week, predict the winner, 
          adn we will build the playoffs for you. You can then go on and pick 
          your Super Bowl champion. To get started, select the week. 
        </div>     
      </div>
      
    );
  }
}


