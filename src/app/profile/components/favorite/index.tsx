"use client"

import { Metadata } from "next";
import { useState } from "react"
import { FiEdit, FiX } from "react-icons/fi"

export const metadata: Metadata = {
  title: "Meu perfil - Power Gamer"
}

export function FavoriteCard(){
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gamerName, setGameName] = useState("")
  function handleButton() {
    setShowInput(!showInput)

    if(!input) return;

    setGameName(input)
    setInput("")
  }

  return (
    <div className="w-full text-white rounded-md bg-gray-900 p-4 h-44 flex justify-between flex-col">
      {showInput ? (
        <div className="w-full">
          <input 
            type="text" 
            className="border-white border-1 placeholder:text-white placeholder:cursor-white"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="pl-2 cursor-pointer" onClick={handleButton}>
            <FiX />
          </button>
        </div>
      ): (
        <button 
          className="self-start hover:scale-110 cursor-pointer duration-200 transition-all"
          onClick={handleButton}
        >
          <FiEdit size={24} color="#fff"/>
        </button>
      )}

      {gamerName && (
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Jogo Favorito: </span>
          <p className="text-white">{gamerName}</p>
        </div>
      )}

      {gamerName && <p>Adicionar jogo</p> }

    </div>
  )
}