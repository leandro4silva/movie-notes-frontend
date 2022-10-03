import { Container } from "./styles";

export function Input({icon:Icon, register, hasError, ...rest}){
    return(
        <Container hasError={hasError}>
            {Icon && <Icon size={20}/>}
            <input {...rest} {...register}/>
        </Container>
    )
}