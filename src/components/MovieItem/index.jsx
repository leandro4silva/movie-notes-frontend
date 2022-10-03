import { Container, Footer } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function MovieItem({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div className="rating">
                <Rating rating={data.rating}/>
            </div>
            <p>{data.description}</p>
            {   
                data.tags &&
                <Footer>
                    {
                        data.tags.map((tag, index) => {
                            return(
                                <Tag key={String(index)} title={tag}/>
                            )
                        })
                    }
                </Footer>
            }
        </Container>
    )
}