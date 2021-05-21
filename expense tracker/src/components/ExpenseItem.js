import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem=(props)=> {

    const {dispatch} =useContext(AppContext)

    const handleDelete=(event)=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id
        })
    }
    return (
        <li className="list-group-item align-item-center justify-content-between d-flex">
            {props.name}
            <div>
                <span className="badge badge-pill badge-primary mr-1">${props.cost}</span>
                <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
            </div>
            
        </li>
    )
}

export default ExpenseItem
