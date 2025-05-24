interface ItemProps {
  item: string
}
export function Label({ item }: ItemProps){
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-center rounded-sm font-medium my-5">
      <h3>{item}</h3>
    </div>
  )
}