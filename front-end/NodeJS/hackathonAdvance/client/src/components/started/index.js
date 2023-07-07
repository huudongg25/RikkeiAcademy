import React, { useState } from 'react'
import './index.css'
import isObjectEmptyValue from '../../functions/isCheckEmptyKey'
import axiosClient from '../../api/axiosCreate'
import { useNavigate } from 'react-router-dom'
export const Started = () => {
    const [formData, setFormData] = useState({})
    const [validate, setValidate] = useState(false)
    const router = useNavigate()
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setValidate(false)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (isObjectEmptyValue(formData)) {
            setValidate(true)
        } else {
            console.log(222);
            axiosClient({
                method: 'POST',
                url: 'api/v1/game',
                data: formData
            }).then(() => {
                router('/dashboard')
            })
        }
    }


    return (
        <div className='wrapper-started'>
            <div>
                <h1 className='title-started'>Score Keeper</h1>
                <form onSubmit={handleOnSubmit} className='form-started'>
                    <input onChange={handleOnChange} type="text" placeholder='Name player 1' name='player1' />
                    <input onChange={handleOnChange} type="text" placeholder='Name player 2' name='player2' />
                    <input onChange={handleOnChange} type="text" placeholder='Name player 3' name='player3' />
                    <input onChange={handleOnChange} type="text" placeholder='Name player 4' name='player4' />
                    {validate && <span className='err-msg'>Please enter full player name</span>}
                    <button type='submit'>Create game</button>
                </form>
            </div>
        </div>
    )
}
