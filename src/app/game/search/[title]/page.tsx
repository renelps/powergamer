import { Container } from "@/components/container";
import { GameCard } from "@/components/gamecard";
import { Input } from "@/components/input";
import { PowerGamarProps } from "@/utils/types/gamer";

async function getData(title: string) {
  const decodeTitle = decodeURI(title)
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`)
    return res.json();

  }catch(err) {
    console.log(err)
  }
}



export default async function Search({
  params: { title }
}: {
  params: { title: string}
}){

  const games: PowerGamarProps[] = await getData(title);
  return (
    <main>
      <Container>
        <Input />

        <h2 className="font-medium mb-5">Veja oque encontramos com esse nome:</h2>

        {!games && (
          <p>Esse jogo não foi encontrado</p>
        )}

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> 
          {games && games.map((item) => (
            <GameCard key={item.id} data={item}  />
          ))}
        </section>
      </Container>
    </main>
  )
}