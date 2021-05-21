import React, { useContext, useState } from 'react'
import {TiEdit} from 'react-icons/ti'
import { AppContext } from '../context/AppContext';

const Budget=()=>{
    const {dispatch} = useContext(AppContext)

    const [budget,setBudget]=useState()

    const handleChange=(event)=>{
        
        setBudget(event.target.value)
        console.log(budget)

    }

    const handleClick=()=>{
        dispatch({
            type:"EDIT_BUDGET",
            payload:budget
        })
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: $</span>
            <input type="text" value={budget} name="budget" onChange={handleChange}/>
            <TiEdit size='1.5em' onClick={handleClick}></TiEdit>

        </div>
    );
}

export default Budget
