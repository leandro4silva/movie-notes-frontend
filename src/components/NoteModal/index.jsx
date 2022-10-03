import * as Dialog from '@radix-ui/react-dialog'

import {DialogOverlay, DialogContent, DialogTitle, DialogDescription} from './styles'

import { FiX } from 'react-icons/fi'
import { useState } from 'react'

export function NoteModal({deletedTag}) {
    
    function handleDelete(){
        deletedTag(true)
    }

    return (
        <Dialog.Portal>
            <DialogOverlay/>
            <DialogContent >
                <Dialog.Close> 
                    <FiX size={24}/> 
                </Dialog.Close>
                <DialogTitle>Deseja realmente excluir essa nota?</DialogTitle>
                <DialogDescription>Ao excluir a nota será permanentemente apagada.</DialogDescription>
                <footer>
                    <Dialog.Close>Cancelar</Dialog.Close>
                    <button
                        type='button'
                        onClick={handleDelete}
                    >
                        Excluir
                    </button>
                </footer>
            </DialogContent>
        </Dialog.Portal>
    )
}


