import React from 'react';
// import styles from './greeting.css'
// import ReactDOM from 'react-dom'
// import reactToWebComponent from "react-to-webcomponent"
import styled from 'styled-components'
// const style = {
//     color: 'red',
// }

const Heading = styled.h1`
    color: orange
`

const Greeting = () => (
    // <div style={style}>
        <Heading>
            greetings from react
        </Heading>
    // </div>
)

// const ReactGreeting = reactToWebComponent(Greeting, React, ReactDOM)
// customElements.define('react-greet', ReactGreeting)
 
export default Greeting;