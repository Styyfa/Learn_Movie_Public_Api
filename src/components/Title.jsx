
function Title({title}) {
  return (
    <div className="py-4 px-16">
        <h1 className="relative capitalize font-bold text-2xl"><span className="absolute w-3 h-[100%] bg-rose-600 -left-4"></span>{title}</h1>
    </div>
  )
}

export default Title
