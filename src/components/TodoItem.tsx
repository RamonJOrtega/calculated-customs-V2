"use client"

import { redirect } from "next/navigation";
import React from "react"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    removeTodo: (id: string) => void
    toggleTodo: (id: string, complete: boolean) => void   
}


export function TodoItem({ id, title, complete, removeTodo, toggleTodo }: TodoItemProps) {
    
    const [removed, setRemoved] = React.useState(false)
    const handleButtonClick = async () => {
        await removeTodo(id)
        setTimeout(() => {alert("removing")}, 500)

    }
    return (
        <div className="flex flex-row justify-between">
          
            <li className="flex gap-1 items-center"> 
                <input id = {id} 
                    type= "checkbox" 
                    className="curser-pointer peer" 
                    defaultChecked={complete}
                    onChange={e => toggleTodo(id, e.target.checked)}/>
                <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"> 
                    {title}  
                </label>   
            </li>   
            <form action={handleButtonClick} className="flex gap-2 flex-col">
                <div className="flex gap-1 justify-end">
                    
                    <button type = "submit" 
                    className="my-1 border border-slate-300 px-2 py-1 rounded 
                    hover:bg-slate-700 focus-within:bgslate-700 outline-none">
                    Remove from List
                    </button>
                </div>
            </form>

        </div>
    )
}