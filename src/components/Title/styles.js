import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.title === 'first' ? '#fff;' : '#000;'};
    text-align: ${(props) => props.title === 'first' ? 'center' : ''};
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    margin-top: 20px;
`