import Work from "./WorkPage/Work"
import About from "./AboutPage/About"
import { BrowserRouter , Routes , Route  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/work" element={ <Work /> }   />
            <Route path="/about" element={ <About /> }   />
     

        </Routes>
    
    </BrowserRouter>
  )
}

export default App