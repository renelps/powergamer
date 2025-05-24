import { PowerGamarProps } from "@/utils/types/gamer";
import Image from "next/image";
import Link from "next/link";
import { BiSolidRightArrowCircle } from "react-icons/bi";

interface GameDataProps {
  data: PowerGamarProps;
}
export function GameCard( { data }: GameDataProps){
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-slate-200 rounded-md p-3 mb-4">
        <div className="relative w-full h-56 hover:scale-105 transition-all duration-300">
          <Image 
            className="rounded-md object-cover"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          />
        </div>

        <div className="flex items-center mt-4 justify-between">
          <p className="text-neutral-500 font-medium text-sm line-clamp-1">{data.title}</p>
          <BiSolidRightArrowCircle size={24} color="#000"/>
        </div>
      </section>
    </Link>
  )
}