import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
// import reactToWebComponent from "react-to-webcomponent"
import Greeting from './components/Greeting/greeting';
import Form from './components/Form/Form';
// import {ShadowView} from 'shadow-view'
// import ReactShadowRoot from 'react-shadow-root';
import './App.css'
// import './components/Greeting/greeting.css'
import './components/Form/Form.css'
import {create} from 'jss'
import {StylesProvider, jssPreset} from '@material-ui/styles'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {CacheProvider} from '@emotion/react'
import {Provider} from 'react-redux'
import createCache from '@emotion/cache';
import store from './redux/store'
import Second from './components/second/second';
// import styles from './components/second/second.module.css'
// import root from 'react-shadow'

// export class ShadowView extends React.Component {
//   attachShadow = (host) => {
//     const { children } = this.props;
//     const shadowRoot = host.attachShadow({ mode: "open" });
//     ReactDOM.render(children, shadowRoot)
//   }
//   render() {
//     console.log(this.props)
//     return <div ref={this.attachShadow}>
//     </div>;
//   }
// }

function App() {
  
  return (
    /* // <ReactShadowRoot>
    // <root.div> */
    // <ShadowView>
    <Provider store={store}>

    <div className="App" >
      <Greeting/>
      <Second />
      <Form/>
    </div>
    </Provider>
    // </ShadowView> 
    // </root.div>
    //  </ReactShadowRoot>
  );
}

// const theme = createTheme()
// export class ReactElement extends HTMLElement {
//   connectedCallback () {
//     const shadowRoot = this.attachShadow({mode: 'open'})
//     const mountPoint = document.createElement('div')
//     const emotionRoot = document.createElement('style')
//     const reactPoint = shadowRoot.appendChild(mountPoint)
//     shadowRoot.appendChild(emotionRoot)
//     const jss = create({
//       ...jssPreset(),
//       insertionPoint: reactPoint
//     })
//     const cache = createCache({
//       key: 'css',
//       prepend: true,
//       container: emotionRoot
//     })
//     // emotionRoot.appendChild(styles.second)
//     // const style = document.createElement('style')
//     // style.innerHTML = ''
//     ReactDOM.render(
//       <StylesProvider jss={jss}>
//         <CacheProvider value={cache}>
//           <ThemeProvider theme={theme}>
//             <App />
//           </ThemeProvider>
//         </CacheProvider>
//       </StylesProvider>, mountPoint
//     )
//   }
// }

// customElements.define('react-component', ReactElement)

// const container = document.createElement('div');
// document.body.appendChild(container);

// // Add shadow root to component.
// const shadow = document.querySelector('div').attachShadow({ mode: 'open' });

// // Select the web component, then the shadowRoot.
// const target = document.querySelector('div').shadowRoot;

// ReactDOM.render(<App />, target);

export default function ReactApp () {
  return <App />
}

class ReactElement extends HTMLElement {
  connectedCallback () {
    // this.mountPoint = document.createElement('div')
    // const shadowRoot = this.attachShadow({mode: 'open'})
    // shadowRoot.appendChild(this.mountPoint)
    ReactDOM.render(<ReactApp />, this)
  }
}

customElements.define('react-component', ReactElement)


// const ReactGreeting = reactToWebComponent(App, React, ReactDOM);
// customElements.define("react-component", ReactGreeting)



// export default App;
