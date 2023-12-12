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
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

