import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './views/Home/Home'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        {/* <Route exact path='/Registro' element= {<Registro/>} /> */}
        {/* <Route exact path='/Cocinas' element= {<Cocinas/>} /> */}
        {/* <Route exact path='/Closet' element= {<Closet/>} /> */}
        {/* <Route exact path='/Gabinete' element= {<Gabinete/>} /> */}
      </Routes>
    </div>
  )
}

export default App
