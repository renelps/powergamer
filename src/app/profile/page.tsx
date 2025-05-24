import { Container } from "@/components/container";
import Image from "next/image";
import ImageProfile from "/public/user.png"
import { FaShareAlt } from "react-icons/fa";
import { FavoriteCard } from "./components/favorite";
export default function Profile(){
  return (
    <div className="w-full">
      <Container>
        <section className="mt-8 mb-5 w-full flex flex-col sm:flex-row relative items-center justify-between">
          <div className="flex items-center gap-3 flex-col sm:flex-row my-2">
            <Image 
              src={ImageProfile}
              alt="profile"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h2 className="font-bold text-2xl">Renan Gabriel</h2>
          </div>

          <div className="flex gap-3 sm:absolute top-0 right-0">
            <button className="bg-gray-700 px-4 py-3 rounded-sm text-white">Configuração</button>
            <button className="bg-gray-700 px-4 py-3 rounded-sm"><FaShareAlt width={24} color="#fff" /></button>
          </div>
        </section>

        <section className="flex flex-wrap gap-4 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </div>
  )
}