import Link from "next/link";
import { toEditorSettings } from "typescript";
import { prisma } from "./db";
import { TodoItem } from "@/components/TodoItem";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id:string, complete: boolean) {
  "use server"
  console.log("toggling")
  await prisma.todo.update({ where:{id}, data: {complete}})
}

async function removeTodo(id: string) { 
  "use server"
  console.log("removing")
  await prisma.todo.delete({where:{id}}) 
}

export default async function Home() {
  const todos = await getTodos()
  //await prisma.todo.create({data: {title: "test", complete: false}})

  const gradientTextStyle = 
  "bg-gradient-to-r from-blue-600 via-slate-300 to-indigo-400 inline-block text-transparent bg-clip-text";

  return (
    <div className="h-screen flex">
      <div className="w-screen mt-6">
         <div className="bg-neutral-900 p-6 rounded-md text-white" >
          <header className="flex justify-between items-center mb-5 ">          
          <h1 className={gradientTextStyle + " text-2xl font-lightw-fit m-auto"} >Database-Driven To-Do List </h1>
            <h1 className="text-2xl"></h1>
              <Link 
              className="my-2 border border-slate-300 px-2 py-1 rounded 
               hover:bg-slate-700 focus-within:bgslate-700 outline-none"
              href="/new"> 
              Add to List
              </Link>
          </header>
          <ul className="pl-4">
            {todos.map(todo => (
              <div >
                <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
              </div>
            ))}
          </ul>
        </div>
      </div> 
    </div>
  )
} 