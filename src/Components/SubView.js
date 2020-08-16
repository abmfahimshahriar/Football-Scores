import React from 'react';
import styled from 'styled-components';
import Footer from './Footer'
import Modal from './Modal'
import TeamStats from './TeamStats'
import TableView from './TableView'
const SubView = (props) => {
    return (
        <SubViewWrapper>
            <section className='shadow p-5 mb-5 bg-white rounded' >
                <TableView/>
                <Modal>
                <TeamStats/>
                </Modal>
                <Footer/>
            </section>
        </SubViewWrapper>
    )
}

const SubViewWrapper = styled.div `
    
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainWhite);
`;



export default SubView;