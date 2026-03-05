import Work from "./WorkPage/Work"
import About from "./AboutPage/About"
import Contact from "./ContactPage/Contact"
import { BrowserRouter , Routes , Route  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/work" element={ <Work /> }   />
            <Route path="/about" element={ <About /> }   />
            <Route path="/contact" element={ <Contact /> }   />

     

        </Routes>
    
    </BrowserRouter>
  )
}

export default App