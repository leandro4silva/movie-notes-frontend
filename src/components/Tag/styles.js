import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.BLACK_100};
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.GRAY_200};
    line-height: 1.4rem;
`