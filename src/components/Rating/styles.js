import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${({isPreview}) => isPreview ? "1rem" : "0.6rem"};

    > img{
        width: ${({isPreview}) => isPreview ? "2rem" : "1.2rem"};
        height: ${({isPreview}) => isPreview ? "2rem" : "1.2rem"};
    }
`