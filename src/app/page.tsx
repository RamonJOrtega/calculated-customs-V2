import Link from "next/link";
import { toEditorSettings } from "typescript";
import { prisma } from "./db";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id:string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where:{id}, data: {complete}})
}

async function removeTodo(id: string) {
  "use server"
  await prisma.todo.delete({where:{id}})
}

export default async function Home() {
  const todos = await getTodos()
  //await prisma.todo.create({data: {title: "test", complete: false}})


  return (
  <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Database-Driven To-Do List</h1>
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
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
          </div>
        ))}
      </ul>
  </>
  )
} 