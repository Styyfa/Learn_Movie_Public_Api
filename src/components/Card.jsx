import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Card({data, title}) {
  return (
    <div className="py-5 px-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {data?.map(items=>{
        return <Link to={title === 'search' ? '/detailSearch' : '/detail'}>
        <div key={items.id} className="bg-rose-600 w-[170px] h-[250px] lg:w-[220px] lg:h-[300px] cursor-pointer group overflow-hidden rounded-lg relative">
          <img src={`https://image.tmdb.org/t/p/w500/${items?.poster_path}`} className='w-full h-[100%] object-cover' />
          <div className="absolute top-0 -left-56 group-hover:left-0 group-hover:transition-all bg-black text-xs md:text-sm lg:text-[16px] opacity-70 text-white font-bold w-full h-[100%] flex items-center justify-center">
              <p className='text-center'>{items.title}</p>
          </div>
        </div>
        </Link>
      })}
    </div>
  )
}

export default Card
