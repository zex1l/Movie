import { Route, Routes} from 'react-router-dom'

import Home from './views/Home/Home'
import NotFound from './views/NotFound/NotFound'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import CurrentMovie from './views/CurrentMovie/CurrentMovie'

function App() {


  return (
    <>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/catalog'/>
          <Route path='/movie/:id' element={<CurrentMovie/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Container>
    </>
    
  )
}

export default App
