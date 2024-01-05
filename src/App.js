// import './App.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Navbar from './Navbar/Navbar';
// import Home from './Home/Home';
// import About from './About/About';

// function App() {
//   return (
//     <>
//       <Router>
//         <div>
//           <Navbar />
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route exact path="/about">
//               <About />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;


import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import About from './Components/About/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { useState } from 'react';
// import NoteId from './Components/NoteId';

function App() {

  const[alert,setalert] = useState(null)
  const showalert = (message,type) => {
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  // showalert('dark mode has been enabled','success')

  return (
    <>
      <NoteState>
        <BrowserRouter >
          <Navbar/>
          <Alert alert={alert}/>
          <div className="container my-0  ">
            <Routes>
              <Route path="/" element={<Home showalert={showalert}/>} />
              <Route path="/about" element={<About showalert={showalert}/>} />
              <Route path="/login" element={<Login showalert={showalert}/>} />
              <Route path="/signup" element={<Signup showalert={showalert}/>} />
              {/* <Route path="/note._id" element={<NoteId showalert={showalert}/>} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

