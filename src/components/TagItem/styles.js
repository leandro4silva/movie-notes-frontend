import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        align-items: center;
        gap: 1.6rem;

        background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
        border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none" };
        
        border-radius: 1rem;
        overflow: hidden;
        
        > input{
            padding: 2rem 0rem 2rem 1.6rem;
            background: transparent;
            border: none;
            font-size: 1.6rem;
            line-height: 1.9rem;
            color: white;
        }


        button{
            color: ${({theme}) => theme.COLORS.PINK};
            margin-right: 1.6rem;
            cursor: pointer;
            border: none;
            background: transparent
        }

`