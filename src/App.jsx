import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import DetailSearch from './pages/DetailSearch'
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/detailSearch' element={<DetailSearch />} />
      <Route path='/search/:s' element={<SearchPage />} />
    </Routes>
  )
}

export default App
