import './About.css';


export default function About() {


  return (
<>

    <div className='container' id='aboutpage' >
          <h1>ABOUT US </h1>
        <div className="accordion" id="accordionExample">
<div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button btnheader"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       A curious learner
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      {/* Hello there! My name is <strong>Mithun S</strong>, and I am currently pursuing Electronics and Communication Engineering at <strong>New Horizon College of Engineering</strong>  in Marathahalli, Bangalore. With a strong passion for  <strong><code>Web Development</code></strong> , I am constantly exploring the ever-evolving world of coding and design. <div><strong>Thank you</strong> for stopping by my website, and I hope you find something valuable during your visit!</div> */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed btnheader"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Tools used in making this website?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      {/* I have gained practical experience in a range of programming languages such as JavaScript, React, HTML, and CSS by doing this project. Additionally, I have worked extensively with key concepts including <code>routing</code>,<code>props and proptypes</code> , and various <code>hooks</code>  such as useNavigate and useState also learnt how to work with <strong>bootstarping</strong> and their elements to save time. My projects have involved implementing diverse functionalities such as <strong>handling events</strong>  extancively ,favicon changing etc... Throughout my work, I have relied on the efficient and user-friendly environment of Visual Studio Code. */}
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed btnheader"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What can you do on this website?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      {/* <strong>Welcome</strong> to our text playground! Explore the power to transform your sentences effortlessly. Convert text to lowercase, uppercase, or capitalize it. Easily remove spaces, clear text, and copy the modified text to your clipboard. Additionally, discover the length of your content by knowing the word count,character count sentence count, and paragraph count. Find out how long it might take to read your text. <div> <strong>Enjoy experimenting</strong> with the diverse functionalities and unleash the potential of your words.Experience our <code>vibrant interface</code> with both colorful dark mode and light mode options for a personalized browsing experience.</div>  */}
      </div>
    </div>
  </div>
</div>
    </div>

</>


  )
}
















// import React, { useEffect } from 'react'
// import { useContext } from 'react'
// import notecontext from '../context/notes/NoteContext'

// export default function About() {
//   const a = useContext(notecontext)
//   useEffect(() => {
//     a.update()
//     // eslint-disable-next-line
//   },[])
//   return (
//     <>
//       <div>All About Me</div>
//       <div>
//         <p>this is about {a.state.name} of class {a.state.class}</p>
//       </div>
//     </>
   
//   )
// }
 
// in Home.js
// let location =useLocation()
// useEffect(()= {
//   console.log(location.pathname)
// },[location])
