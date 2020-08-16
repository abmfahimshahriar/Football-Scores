import React from 'react'
import { MatchConsumer } from '../Context/Context'
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <MatchConsumer>
            {
                value => {
                    const { nextPage,
                        previousPage,
                        lastPage,
                        firstPage,
                        handlePageNumberChange,
                        currentPageNumberLimit,
                        pageNumber } = value;
                    return (
                        <FooterWrapper>
                            <b>Items per page :</b>
                            <select
                                name="currentPageNumberLimit"
                                id="currentPageNumberLimit"
                                onChange={handlePageNumberChange}
                                className="filter-item"
                                value={currentPageNumberLimit}
                            >
                                {
                                    pageNumber.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                            <FaAngleDoubleLeft onClick={firstPage} className='icon' />
                            <FaAngleLeft onClick={previousPage} className='icon' />
                            <FaAngleRight onClick={nextPage} className='icon' />
                            <FaAngleDoubleRight onClick={lastPage} className='icon' />
                        </FooterWrapper>
                    )
                }
            }
        </MatchConsumer>
    )
}

const FooterWrapper = styled.div`
.icon {
        font-size: 2.5rem;
        padding: 0.5rem;
        margin: 1rem;
        color: var(--primaryColor);
        background: var(--mainBlack);
        border-radius: 0.5rem;
    }
`;

export default Footer
