import styled from "styled-components";


export const Container = styled.button`  
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({theme}) => theme.COLORS.PINK };
    background: none;
    border: none;
    font-size: 1.6rem;  
    cursor: pointer;

`