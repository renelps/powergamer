import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";
export function Header(){
  return (
    <div className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-screen-lg mx-auto justify-center flex items-center sm:justify-between">
        <nav className="flex items-center justify-center gap-3">
          <Link href="/" 
           className="text-2xl font-bold text-shadow-stone-700"
          >
            Power <span className="text-orange-500">Gamer</span>
          </Link>

          <Link href="/">
            home
          </Link>
          <Link href="/profile">
            Perfil
          </Link>
        </nav>

        <div className="hidden sm:flex items-center justify-center">
          <Link href="/profile">
             <LiaGamepadSolid />
          </Link>
        </div>
      </div>
    </div>
  )
}