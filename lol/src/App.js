import './App.scss';
import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';
import HomePage from './HomePage';
import UserContext from './Context/UserContext';
import VideoContext from './Context/VideoContext';
import About from './Components/Navigation/About';
import Manage from './Components/Navigation/Manage';
import Contact from './Components/Navigation/Contact';
import EditInfo from './Components/Forms/EditInfo';
function App() {

  const heading='New Page';
  const [currentUser, setCurrentUser]=useState()
  const logData=(data)=>{
    setCurrentUser(data)
  }
  const [videos, setVideos]=useState(localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [])
  const setuserVideos=(videoList)=>{
    setVideos(videoList)
  }

  return (
    <div className="App">
   <BrowserRouter>
       <UserContext.Provider value={{currentLogged:currentUser, setCurrentLogged:logData}}>
       <VideoContext.Provider value={{eachvideoContent:videos, setEachvideoContent:setuserVideos}}>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path='/About' element={<About />} />
            <Route path='/Manage' element={<Manage />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/EditInfo' element={<EditInfo />} />
          </Routes>
          </VideoContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
