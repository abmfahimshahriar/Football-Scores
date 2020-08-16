import React from 'react'
import {MatchConsumer} from '../Context/Context'
import Match from './Match'
const MatchList = () => {
    return (
        <MatchConsumer>
        {
            value => {
                const {matches,currentCount,currentPageNumberLimit} = value
                return(
                    <>
                        {
                            matches.slice(currentCount,currentCount+currentPageNumberLimit).map((item,index) => {
                                return <Match key={index} date={item.date} team1 = {item.team1} team2={item.team2} score={item.score.ft} />
                            })
                        }
                    </>
                )
            }
        }
        </MatchConsumer>
    )
}

export default MatchList