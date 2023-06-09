"use client"
type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    removeTodo: (id: string) => void
    toggleTodo: (id: string, complete: boolean) => void
    
}

export function TodoItem({ id, title, complete, removeTodo, toggleTodo }: TodoItemProps) {
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
           
            <button  onClick={() => removeTodo(id)}
            className="my-1 border border-slate-300 px-2 py-1 rounded 
            hover:bg-slate-700 focus-within:bgslate-700 outline-none">
            Remove from List
            </button>
        </div>
    )
}