import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const Spinner = () => {
    return (
        <Wrapper>
            <Container>
                <Loader 
                    type="Oval" 
                    color="#000" 
                    height={80} 
                    width={80} 
                />
            </Container>
        </Wrapper>
    )
}

export default Spinner


const Wrapper = styled.div`
    position: relative;
    height: 100%;
`

const Container = styled.div`
    position: absolute;
    top: calc(50% - 50px);
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    height: 100px;
    background-color: #fff;
    text-align: center;
    /* display: flex;
    align-items: center;
    justify-content: center; */

`
