import { Container } from "./styles";


export function TextArea({register, hasError = false, ...rest}){
    return (
        <Container {...rest} {...register} hasError={hasError}>  
        </Container>
    )
}