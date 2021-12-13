import React from 'react';
// import styled from 'styled-components'
// import './second.css'
import styles from './second.module.scss'
// import {createUseStyles} from 'react-jss'

// const style = {
//     color: 'blue'
// }

// const Title = styled.div`
//     color: pink
// `

// const useStyles = createUseStyles({
//     heading: {
//         color: 'pink'
//     }
// })

const Second = () => {
    // const classes = useStyles()
    return (
    // <div style={style}> 
    <div className={styles.second}>
    {/* // <Title> */}
        Hi fromt other component
    {/* // </Title> */}
    </div>
)}
 
export default Second;