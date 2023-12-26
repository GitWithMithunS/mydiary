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
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter >
          <Navbar/>
          <Alert/>
          <div className="container my-0  ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

