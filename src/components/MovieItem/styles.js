import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    padding: 3.2rem 3.2rem 3.2rem 3.7rem;
    border-radius: 1.6rem;
    margin-bottom: 2.4rem;

    > h1{
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.1rem;
    }

    > p {
        margin-top: 1.5rem;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }

    .rating{
        margin-top: 0.8rem;
    }
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 1.5rem;
`

