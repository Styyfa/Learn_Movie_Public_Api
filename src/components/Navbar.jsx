import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate(`/search/${e.target.s.value}`)
    }


  return (
    <div className="flex items-center justify-between py-4 px-16 bg-zinc-900">
        <div className="flex gap-5 items-center">
            <h1 className="text-rose-600 font-bold text-2xl">Ai</h1>
            <ul className="flex gap-3 items-center text-white">
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="bg-rose-600 rounded-3xl w-[200px] h-[30px] md:w-[300px] md:h-[35px] p-1 flex items-center">
            <input type="text" name="s" placeholder="search" autoComplete="off" className="w-[85%] p-1 bg-transparent border-none outline-none" />
            <button type="submit" className="bg-black rounded-full text-white w-[15%] flex items-center justify-center h-[100%]">
                <FaSearch />
            </button>
        </form>
    </div>
  )
}

export default Navbar
