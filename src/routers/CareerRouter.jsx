import { Route, Routes } from 'react-router'
import CareerHome from '../pages/careers/career-home/CareerHome'


const CareerRouter = () => {
  return (
    <Routes>
        
        <Route path='/' element={ <CareerHome /> } />

    </Routes>
  )
}

export default CareerRouter