import React from 'react'
import { MatchConsumer } from '../Context/Context'

const TeamStats = () => {
    return (
        <MatchConsumer>
            {
                value => {
                    const { singleTeamWithStats, closeModalHandler } = value
                    return (
                        <div>
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th colSpan='4'><h1>{singleTeamWithStats.name}</h1></th>
                                    </tr>
                                </thead>
                                <thead className="thead-light">
                                    <tr>
                                        <th>Played</th>
                                        <th>Win</th>
                                        <th>Lost</th>
                                        <th>Draw</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{singleTeamWithStats.win + singleTeamWithStats.lost + singleTeamWithStats.draw}</td>
                                        <td>{singleTeamWithStats.win}</td>
                                        <td>{singleTeamWithStats.lost}</td>
                                        <td>{singleTeamWithStats.draw}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn btn-primary' onClick={closeModalHandler}>Close</button>
                        </div>
                    );
                }
            }
        </MatchConsumer>
    )
}

export default TeamStats