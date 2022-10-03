import { Container } from "./styles"
import { FiArrowLeft } from 'react-icons/fi'

export function Back({title, ...rest}) {
    
    return(
        <Container type="button" {...rest}>
            <FiArrowLeft/> {title}
        </Container>
    )
}