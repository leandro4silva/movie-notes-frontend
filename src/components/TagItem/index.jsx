import { Container } from "./styles";
import { FiX, FiPlus } from 'react-icons/fi'

export function TagItem({isNew = false, onClick, ...rest}){
    return (
        <Container isNew={isNew}>
            <input 
                type="text" 
                placeholder={isNew? "Novo Marcador" : null}
                readOnly={!isNew}
                {...rest}
            />
            <button 
                type="button"
                title={isNew ? "Adicionar" : "Remover"}
                onClick={onClick}
            >
                { isNew ? <FiPlus size={22}/> : <FiX size={22}/> }
            </button>
        </Container>
    )
}