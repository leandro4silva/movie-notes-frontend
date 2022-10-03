import { ToastViewport, ToastRoot, ToastTitle, ToastDescription } from './styles'
import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

import * as Toast from '@radix-ui/react-toast';
import { useState, useEffect } from 'react';

export function ToastMessage({ message, isSuccess, ...rest }) {
   

    return (
        <Toast.Provider>
            <ToastRoot duration={3000} {...rest} isSuccess={isSuccess}>
                <div className='message'>
                    <ToastTitle> {message.isSuccess ? <FiCheckCircle/> : <FiAlertCircle/> } Aviso!</ToastTitle>
                    <ToastDescription>{message.description}</ToastDescription>
                </div>
                <Toast.Close>
                    <FiX size={22}/>
                </Toast.Close>
            </ToastRoot>
            <ToastViewport/>
        </Toast.Provider>
    )
}