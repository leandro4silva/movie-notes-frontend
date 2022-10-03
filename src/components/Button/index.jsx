import { Container } from "./styles";

export function Button({title, type, isDelete = false, ...rest}){
    return(
        <Container 
            type={type}
            isDelete={isDelete}

            {...rest}
        >{title}</Container>
    )
}