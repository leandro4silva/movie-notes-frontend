import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import theme from "../../styles/theme";


export const DialogOverlay = styled(Dialog.Overlay)`
    inset: 0;
    background-color: rgb(0 0 0 / 0.6);
    position: fixed;
    
`

export const DialogContent = styled(Dialog.Content)`
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 5rem 3.5rem;
    border-radius: 0.8rem;
    box-shadow: rgb(0 0 0 / 0.25); 
    
    > button{
        background: transparent;
        border: none;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        
        svg{
            color: ${({theme}) => theme.COLORS.PINK};;
        }
    }

    footer{
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
        
        > button{
            padding: 1rem 1.2rem;
            border: none;
            font-weight: 500;
            border-radius: 0.4rem;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
            color: ${({theme}) => theme.COLORS.WHITE};
           
        }
        
        > button:last-child{
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: black;
        }
    }
`


export const DialogTitle = styled(Dialog.Title)`
    font-size: 2.5rem;
    color: ${({theme}) => theme.COLORS.WHITE};
`

export const DialogDescription =  styled(Dialog.Description)`
    color: ${({theme}) => theme.COLORS.White};
    font-size: 1.6rem;
`