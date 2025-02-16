
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css'
import NavBar from './Componets/NavBar'
import Routee from "./pages/Route";
import Call from "./Componets/Call/Call";
import Postlistt from "./Componets/SecodPostlist/Postlistt";
import Footer from "./Componets/Footer";
import SinglePage from "./Componets/Singlepage/SinglePage";





function App() {


  return (
    <>
<header>
<NavBar />
</header>
<body style={{marginTop:"6rem"}}>
  <Routee />

 
 
</body>

<Footer />
     
    


</>
  )
}

export default App
