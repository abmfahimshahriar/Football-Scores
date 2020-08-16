import React, { Component } from 'react';


const MatchContext = React.createContext();

class MatchProvider extends Component {

    state = {
        title : '',
        matches: [],
        currentCount: 0,
        currentPageNumberLimit: 10,
        pageNumber: [5,10,20],
        teams: [],
        teamsWithStats: [],
        singleTeamWithStats: {},
        showModal: false
    }

    componentDidMount() {
        this.getMatchList();
    }

    // perform async request to get the data from the API endpoint
    getMatchList = () => {
        fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json', {
            method: 'GET'
        })
            .then(resData => {
                return resData.json();
            })
            .then(data => {
                this.setMatches(data);
            })
            .catch(err => console.log(err));
    }

    // get the individual matches from the JSON data that we got back
    setMatches = (data) => {
        const title = data.name
        const extractData = data.rounds
        let matchesWithMatchDay = extractData.map(item => {
            return item
        });
        let matches = matchesWithMatchDay.map(item => {
            return item.matches
        })

        let machesOnly = []
        
        for(var i in matches){
            for(var j in matches[i]){
                machesOnly.push(matches[i][j])
            }
        }
        
        this.setState({matches:machesOnly,title:title})
        this.setTeams()
    }

    // this function handles next page button
    nextPage = () => {
        let count = this.state.currentCount
        
        if (count === (380 - this.state.currentPageNumberLimit)) {
            count = 0
        }
        else {
            count += this.state.currentPageNumberLimit
        }
        this.setState({currentCount: count})
    }

    // this function handles previous page button
    previousPage = () => {
        let count = this.state.currentCount
        
        if (count === 0) {
            count = 380 - this.state.currentPageNumberLimit
        }
        else {
            count -= this.state.currentPageNumberLimit
        }
        this.setState({currentCount: count})
    }

    // this function handles go to first page button
    firstPage = () => {
        this.setState({currentCount: 0})
    }
    // this function handles go to first page button
    lastPage = () => {
        this.setState({currentCount: 380 - this.state.currentPageNumberLimit})
    }

    // this function hanlde change of page item to be shown per page
    handlePageNumberChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: parseInt(value)
        })
    }

    // this function set the unique teams from the matches
    setTeams = () => {
        const matches = this.state.matches
        const tempTeams = matches.map(item => {
            return item.team1
        });
        const teams = [...new Set(tempTeams)]
        this.setState({teams:teams})
        this.getStats()
    }

    // this function calculates the win,lost and draw for one team
    statCount = (teamName) => {
        const matches = this.state.matches
        let win = 0
        let lost = 0
        let draw = 0
        for(var i in matches){
            if(teamName === matches[i].team1){
                if(matches[i].score.ft[0] > matches[i].score.ft[1]) {
                    win += 1
                }
                else if(matches[i].score.ft[0] < matches[i].score.ft[1]){
                    lost += 1
                }
                else {
                    draw += 1
                }
            }
            else if(teamName === matches[i].team2){
                if(matches[i].score.ft[0] < matches[i].score.ft[1]) {
                    win += 1
                }
                else if(matches[i].score.ft[0] > matches[i].score.ft[1]){
                    lost += 1
                }
                else {
                    draw += 1
                }
            }
        }
        return {win,lost,draw}
    }

    // this function calculates the win,lost and draw for every team by calling the previous function
    getStats = () => {
        const teams = this.state.teams;
        let tempTeamsWithStats = teams.map(item => {
            const name = item
            const {win,lost,draw} = this.statCount(item)
            const tempTeam = {name,win,lost,draw}
            return tempTeam
        });
        this.setState({teamsWithStats:tempTeamsWithStats})
    }

    // this function sets the state for the clicked team from the view
    getStatForSingleTeam = (teamName) => {
        const teamsWithStats = this.state.teamsWithStats;
        let singleTeamWithStats = teamsWithStats.filter(item => item.name === teamName);
        return singleTeamWithStats;
    }

    // this function handles the click for a certain team on the view
    teamClickHandler = (teamName) => {
        const singleTeamWithStats = this.getStatForSingleTeam(teamName);
        this.setState({singleTeamWithStats:singleTeamWithStats[0],showModal:true});
    }
    
    // this function handles the opening and closing of the modal
    closeModalHandler = () => {
        this.setState({showModal:false})
    }



    render() {
        return (
            <MatchContext.Provider value= {{
                ...this.state,
                nextPage: this.nextPage,
                previousPage: this.previousPage,
                lastPage: this.lastPage,
                firstPage: this.firstPage,
                handlePageNumberChange: this.handlePageNumberChange,
                teamClickHandler: this.teamClickHandler,
                closeModalHandler: this.closeModalHandler
            }}>
            {this.props.children}
            </MatchContext.Provider>
        )
    };
};

const MatchConsumer = MatchContext.Consumer;

export { MatchProvider, MatchConsumer };
