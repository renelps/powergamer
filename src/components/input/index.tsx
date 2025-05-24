"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { FiSearch } from "react-icons/fi"


export function Input(){

  const [input, setInput] = useState("");
  const router = useRouter()

  function handleSearch(event: FormEvent){
    event.preventDefault()

    if(input === "") return;

    router.push(`/game/search/${input}`)

  }
  return (
    <form onSubmit={handleSearch} className="w-full bg-slate-200 my-5 flex items-center justify-between rounded-md p-2">
      <input
        value={input}
        onChange={ (e) => setInput(e.target.value)} 
        type="text" 
        placeholder="Digite o nome do jogo..."
        className="bg-slate-200 outline-0 w-11/12"
      />
      <button type="submit" className="cursor-pointer">
        <FiSearch width={24} color="#ea580c"/>
      </button>
    </form>
  )
}