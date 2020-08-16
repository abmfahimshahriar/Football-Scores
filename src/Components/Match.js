import React from 'react';
import { MatchConsumer } from '../Context/Context'

const Match = (props) => {
    const date = props.date;
    const team1 = props.team1;
    const team2 = props.team2;
    const score = `${props.score[0]} - ${props.score[1]}`;
    return (

        <MatchConsumer>
            {
                value => {
                    const { teamClickHandler } = value
                    return (
                        <tr>
                            <td>{date}</td>
                            <td>
                                <button onClick={() => teamClickHandler(team1)} className='btn btn-outline-info btn-sm'>{team1}</button>
                             vs
                                <button onClick={() => teamClickHandler(team2)} className='btn btn-outline-info btn-sm'>{team2}</button>
                            </td>
                            <td>{score}</td>
                        </tr>
                    );
                }
            }
        </MatchConsumer>


    )
}

export default Match;