import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addForm, removeForm} from '../../redux/form/form.action'
import './Form.css'
// import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Box from '@mui/material/Box'

const Form = () => {
    // const [lists, setList] = useState([])
    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const lists = useSelector(state => state.forms.forms)

    const handleChange = (e) => {
        setData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const copy = [...lists, data]
        // setList(copy)
        dispatch(addForm(data))
        // addForm(data)
        setData('')
    }

    const handleDelete = list => {
        // const copy = [...lists]
        // copy.splice(list, 1)
        dispatch(removeForm(list))
        // removeForm(list)
        // setList(copy)
    }
    
    return (
        <div>
            <form className = 'form' onSubmit = {handleSubmit}>
                <TextField onChange = {handleChange} label = "Input" variant = "standard" value = {data}></TextField>
                {/* <Button variant = "contained">submit</Button>    */}
                <button>Submit</button>
            </form>
            <div className = 'lists'>
            {lists.map((list, index) => (
                <Box sx = {{width: '100%', maxWidth: 360, bgcolor: 'whitesmoke', margin: 'auto', color: ''}}>

                <List key = {index}>
                    <ListItem disablePadding>

                    <ListItemButton onClick = {() => handleDelete(list)}>
                    <ListItemText primary = {list}/>
                    </ListItemButton>
                    </ListItem>
                </List>
                </Box>))}
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     lists: state.forms.forms
// })

// const mapDispatchToProps = dispatch => ({
//     addForm: (data) => dispatch(addForm(data)),
//     removeForm: (list) => dispatch(removeForm(list))
// }) 

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

export default Form