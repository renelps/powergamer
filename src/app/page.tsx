import { Container } from "@/components/container";
import { GameCard } from "@/components/gamecard";
import { Input } from "@/components/input";
import { PowerGamarProps } from "@/utils/types/gamer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare} from "react-icons/bs"
async function getPowerGamer() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 }});

    return res.json();
  }catch(err) {
    console.log(err)
  }
} 

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 }});

    return res.json();
  }catch(err) {
    console.log(err)
  }
} 
export default async function Home() {
  const powerGamer: PowerGamarProps = await getPowerGamer();
  const data: PowerGamarProps[] = await getGamesData();

  return (
    <main className="w-full">
      <Container>
        <h2 className="font-bold text-xl py-8 text-center">Separamos um jogo exclusivo para voce</h2>
        <Link href={`/game/${powerGamer.id}`}>
          <section className="w-full bg-black rounded-md">
            <div className="w-full max-h-96 h-96 relative rounded-md">
              <div className="absolute z-20 flex justify-center items-center bottom-0 p-3 gap-2">
                <p className="font-bold text-xl text-white">{powerGamer.title}</p>
                <BsArrowRightSquare size={25} color="#fff" className="border-none"/>
              </div>
              <Image
                src={powerGamer.image_url}
                alt={powerGamer.title}    
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-md opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="font-bold text-lg mt-7 mb-4">
          Conheça alguns de nossos jogos
        </h2>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
          {data && data.map((item) => (
            <GameCard key={item.id} data={item}  />
          ))}
        </section>

      </Container>
    </main>
  );
}
