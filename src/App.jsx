import { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Signin from './components/Signin.jsx';
import Footer from './components/Footer.jsx';
import Signup from './components/Signup.jsx';
import userstate from './context/userstate.jsx'
import Dashboard from './pages/UserDashboard.jsx';

import Router from "./Routes.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App(probs) {

  const params = useParams()
  const { name } = params

  const [success, setsuccess] = useState(false)
  const [authtoken, setauthtoken] = useState("")
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <><Home /></>
    },
    {
      path: "/signin",
      element: <><Signin /> </>
    },
    {
      path: "/signup",
      element: <><Signup /> </>
    },
    {
      path: "/userDashboard",
      element: <><Dashboard /> </>
    }
  ])
  return (
    <><div className='full-page'>
      <Router />
      {/* <RouterProvider router={router}/> */}

    </div>
    </>
  )
}
export default App
