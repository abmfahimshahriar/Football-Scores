import React from 'react'
import Title from '../Components/Title'
import SubView from '../Components/SubView'
import {MatchConsumer} from '../Context/Context'

const Home = () => {
    return (
        <MatchConsumer>
        {
            value => {
                const {title} = value
                return(
                    <section className="py-5">
                    <div className="container">
                    <Title title={title} center/>
                    </div>
                    <SubView/>
                    </section>
                );
            }
        }
        </MatchConsumer>
        
    )
}



export default Home
