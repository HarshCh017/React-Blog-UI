import TopBar from "./components/topbar1/TopBar"
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./write/Write";
import Settings from "./pages/home/settings/Settings";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";
import About from "./pages/About/About";
import { BrowserRouter as Router,Switch,Route,Link ,Routes} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
    <TopBar/>
    <Routes>
      
    <Route exact path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/register' element={user ?<Home/> :<Register/>} />
    <Route  path='/login' element={user ? <Home/> :<Login/>} />
    <Route  path='/write' element={user ? <Write/> :<Register/>} />
    <Route  path='/settings' element={user ? <Settings/> :<Register/>} />
    <Route  path='/post/:postId' element={<Single/>} />
 


    </Routes>
    

    </Router>

  );
}

export default App;
