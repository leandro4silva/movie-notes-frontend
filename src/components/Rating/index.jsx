import { Container } from "./styles";

import starImg from '../../assets/icon/star.svg'
import starOutlineImg from '../../assets/icon/star-outline.svg'

export function Rating({rating, ...rest}){

    const ratingAmends = []

    for(let i = 0; i < 5; i++){
        if(rating > i)
            ratingAmends.push({id: i, icon: <img src={starImg} alt="" key={i}/>})
        else{
            ratingAmends.push({id: i, icon: <img src={starOutlineImg} alt="" key={i}/>})
        }
    }

    return (
        <Container {...rest}>
            {
                    ratingAmends.map(item => item.icon)
            }
        </Container>
    )
}