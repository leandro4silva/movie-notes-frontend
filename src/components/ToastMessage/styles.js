import styled from 'styled-components';
import * as Toast from '@radix-ui/react-toast';


export const ToastViewport = styled(Toast.Viewport)`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 10;
  max-width: 39rem;
  margin: 0;
  list-style: none;
  outline: none;
`

export const ToastRoot = styled(Toast.Root)`
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  padding: 1.8rem 2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  .message{
    display: flex;
    flex-direction: column;
    gap: 0.8;
  }

  > button {
    background: transparent;
    border: none;

    svg{
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
  
  &[data-state = "open"]{
    animation: slideIn 400ms backwards;
  }

  @keyframes slideIn{
    0%{
        opacity: 0;
        transform: translateX(100%);
    }

    100%{
        opacity: 1;
        transform: translateX(0);
    }
  }
  
`


export const ToastTitle = styled(Toast.Title)`
  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-weight: 700;
  font-size: 1.8rem;

  svg{
    color: ${({theme}) => theme.COLORS.PINK};
    margin-right: 0.5rem;
  }
`

export const ToastDescription = styled(Toast.Description)`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-weight: 400;
  font-size: 1.6rem;
`
