import styled from "styled-components";


export const Container = styled.div`
    > h1{
        color: ${({theme}) => theme.COLORS.PINK};
        font-weight: 700;
        font-size: 4rem;
        line-height: 6.3rem;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
    }
`