import React from 'react'
import { MatchConsumer } from '../Context/Context'

const BackDrop = () => {
    return (
        <MatchConsumer>
            {
                value => {
                    const { showModal, closeModalHandler } = value
                    return (
                        showModal ? <div className='Backdrop' onClick={closeModalHandler} ></div> : null
                    );
                }
            }
        </MatchConsumer>
    )
}

export default BackDrop