import React from 'react';
import './TopBar.css'
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';


export default class TopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Week 1'
        }
    }
    render(){
        return(
            <div id = 'topbar'>
                <div className = "topBarElement" id = 'websiteTitle'>
                    NFL SEASON MAKER  
                </div>
                <div id="weekSelector">
                <Dropdown
                    placeholder="Select the week (Dropdown Menu)"
                    className = 'centerDD'
                    options={['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'
                    , 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'
                    , 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'
                    , 'Week 18']}
                    onChange={(value) => this.props.onChange(value)}
                    onSelect={() => this.props.onSelect()} // always fires once a selection happens even if there is no change
                    //onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    //onOpen={() => console.log('open!')}
                /> 
                </div>
                <button onClick = {this.props.generateStandings} className = 'center' id = 'seeCurrentStandings'>
                See Current Standings 
                </button>    
                <button onClick = {this.props.makePlayoffs} className = 'center' id = "goToPlayoffs">
                Go to Playoffs 
                </button> 
            </div>
            
        )
    }
}