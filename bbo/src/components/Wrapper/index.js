import React from "react"
import Container from "react-boostrap"


function wrapper(props){

    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default wrapper