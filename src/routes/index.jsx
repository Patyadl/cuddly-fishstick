import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Catalogo from './Catalogo.jsx'
import ErrorPages from './ErrorPages.jsx'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Catalogo />} />
        <Route path="*" element={<ErrorPages />} />
    </Routes>
  )
}

export default AppRoutes