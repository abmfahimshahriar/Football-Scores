import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return (
        <TitleWrapper className="row" center={props.center}>
            <div className="col">
                <h2 className="text-title">{props.title}</h2>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    text-align: ${props => (props.center ? "center" : "left")};

    .title-underline {
        height: 0.25rem;
        width: 7rem;
        background: var(--primaryColor);
        margin: ${props => (props.center ? "0 auto" : "0")};
    }
`;

export default Title;