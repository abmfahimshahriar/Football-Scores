import React from 'react'
import { MatchConsumer } from '../Context/Context'
import BackDrop from './BackDrop'

const Modal = (props) => {
    return (
        <MatchConsumer>
            {
                value => {
                    const { showModal } = value
                    return (
                        <>
                            <BackDrop />
                            <div
                                className='Modal'
                                style={{
                                    transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
                                    opacity: showModal ? '1' : '0'
                                }}>
                                {props.children}
                            </div>
                        </>
                    );
                }
            }
        </MatchConsumer>

    );
}


export default Modal