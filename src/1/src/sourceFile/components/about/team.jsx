import React from 'react';
import Team_full from './team_full';
import Team_resp from './team_resp';
import './team.css';

class Team extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }


    render(){
        return (
            <div id="team-container">
                <div className="headingContainer">
                    <h1>Travel its fun</h1>
                    <h2>About the team</h2>
                </div>
                <Team_full/>
                <Team_resp/>
            </div>
        );
    }
}

export default Team;