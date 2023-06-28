import React from 'react';
import {IoMdAdd} from 'react-icons/io'

type TodoProps = {
    
};

const Todo:React.FC<TodoProps> = () => {
    
    return (
        <>
        <div className='h-[600px] w-[600px] rounded-xl bg-gray-800'>
            <div className='flex flex-row rounded-full m-2 mt-5 gap-1'>
            <input  className='flex-1 rounded-full'/>
                <button className='flex flex-row bg-orange-500 rounded-full p-2'>
                <IoMdAdd size={20} color="white"/>
                <p className='text-slate-100'>Add</p>
                </button>

            </div>
               

            
        </div>
        </>
    )
}
export default Todo;