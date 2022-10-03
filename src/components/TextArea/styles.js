import styled from "styled-components";

export const Container = styled.textarea`
    resize: vertical;
    min-height: 17.4rem;
    height: 27.4rem;
    padding: 1.9rem 1.6rem;
    border-radius: 1rem;
    color: white;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border: none;
    overflow: hidden;
    border: ${({hasError}) => hasError ? "1px solid red" : null};
`