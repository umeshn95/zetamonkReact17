import React from 'react'
import { Main, Row3 } from './Ourteam.element'

function Teampeople(props) {
    return (
        <Main>
            <Row3>
                <img style={{margin:'auto',borderRadius:'50%'}} src={props.image}></img>
                <h3 style={{padding:'10px'}}>{props.name}</h3>
                <p>{props.designation} <span>{props.logo}</span></p>
            </Row3>
        </Main>
    )
}

export default Teampeople
