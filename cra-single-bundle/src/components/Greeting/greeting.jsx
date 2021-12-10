import React from 'react';
import './greeting.css'
// import ReactDOM from 'react-dom'
// import reactToWebComponent from "react-to-webcomponent"

const Greeting = () => (
    <div className = 'greet'>
        <h1>
            greetings from react
        </h1>
    </div>
)

// const ReactGreeting = reactToWebComponent(Greeting, React, ReactDOM)
// customElements.define('react-greet', ReactGreeting)
 
export default Greeting;