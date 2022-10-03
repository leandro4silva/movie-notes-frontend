import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 1.rem;
    line-height: 2.1rem;

    background-color: ${({theme, isDelete}) => isDelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
    border: none;
    border-radius: 1rem;

    color: ${({theme, isDelete}) => isDelete ? theme.COLORS.PINK : theme.COLORS.BLACK_100  };

    &:disabled{
        opacity: 0.5;
    }
`