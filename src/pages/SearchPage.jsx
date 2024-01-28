import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Title from "../components/Title"
import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"

function SearchPage() {
    const {s} = useParams()

    const [data, setData] = useState([])
    const [page, setPage] = useState(Number(1))

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?query=${s}&page=${page}`, {
        params: {
          api_key: '55be3fa46cc8d26b76e11ce46e0b7fb9'
        }
      }).then(e => setData(e.data))
      .catch((e)=>console.log(e))
    }, [s, page])

    const opt = [...Array(data.total_pages)].map((_, i) => {
      i++
      return <option value={Number(i)} key={i}>{Number(i)}</option>
    })

    const handleClick = (e)=>{
      if(e === 'prev') {
        if(page === 0) return false
          setPage(e => e - 1)
      } else if(e === 'next') {
        if(page === data.total_pages) return false
        setPage(e => e + 1)
      }
    }

    const handleChange = (e)=>{
      setPage(Number(e.target.value))
    }

  return (
    <div>
        <Navbar />
        <Title title={`search ${s}`} />
        <Card data={data.results} title='search' />
        <div className="w-full py-5 px-16 flex justify-center items-center gap-3">
          <button onClick={()=>handleClick('prev')} type="button" className="p-2 font-bold bg-rose-600 rounded-sm ">PREV</button>
          <span className="font-bold text-2x">{page} / {data.total_pages}</span>
          <button onClick={()=>handleClick('next')} type="button" className="p-2 font-bold bg-rose-600 rounded-sm ">NEXT</button>
          <select onChange={(e)=>handleChange(e)} className="bg-rose-600 p-1 font-bold rounded-sm">
            {opt}
          </select>
        </div>
    </div>
  )
}

export default SearchPage
