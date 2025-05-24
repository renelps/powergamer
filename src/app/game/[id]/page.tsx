import { Container } from "@/components/container";
import { PowerGamarProps } from "@/utils/types/gamer"
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { GameCard } from "@/components/gamecard";
import { Metadata } from "next";

interface PropsParams {
  params: {
    id: string;
  }
}
export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
  try {
    const response: PowerGamarProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, { cache: "no-store"}
    )
    .then((res) => res.json())
    .catch(() => {
      return {
        title: "PowerGamer - Descubra jogos incriveis"
      }
    })

    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: response.image_url
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      
    }
      }
    }
  }catch(err) {
    console.log(err)
    return {
      title: "PowerGamer - Descubra jogos incriveis"
    }
  }
}
async function getData(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, { cache: "no-store"});
    return res.json();
  }catch(err) {
    console.log(err)
  }
}


async function getGameSorted() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 50 }})
    return res.json();
  }catch(err) {
    console.log(err)
  }
}
export default async function GameDetail({
  params: { id }
}: {
  params: { id: string }
}){

  const data: PowerGamarProps = await getData(id)
  const sortedGame: PowerGamarProps = await getGameSorted()
  if(!data) {
    redirect("/")
  }
  return (
    <main className="w-full">
      <div className="w-full relative sm:h-96 bg-black h-80">
        <Image 
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          className="object-cover w-full h-80 sm:h-96 opacity-70"
        />
      </div>

      <Container>
        <h2 className="font-bold text-xl pt-2 pb-5">{data.title}</h2>
        <p>{data.description}</p>
        <h3 className="font-bold pt-3">Prataformas: </h3>
        <div className="flex flex-wrap gap-2">
          {data.platforms.map((item) => (
            <Label key={item} item={item}/>
          ))}
        </div>

        <h3 className="font-bold pt-3">Categorias: </h3>
        <div className="flex flex-wrap gap-2">
          {data.categories.map((item) => (
            <Label key={item} item={item}/>
          ))}
        </div>

        <p className="mt-5 mb-2"><strong>Data de lançamento:</strong> {data.release}</p>

        <h2 className="font-bold text-xl pt-2 pb-5">Jogo recomendado: </h2>

        <div className="flex">
          <div className="flex-grow">
            <GameCard data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  )
}