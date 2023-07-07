import React from 'react'
import {AiOutlineSearch,AiFillFolderAdd} from 'react-icons/ai'

export const TodoList = () => {
  return (
    <div className='wrapper'>
        <h1>Mini project todolist app</h1>
        <section className='control'>
            <div className='search'>
                <input type="text" />
                <AiOutlineSearch className='icons'/>
            </div>
            <AiFillFolderAdd className='icons'/>
        </section>
    </div>
  )
}
