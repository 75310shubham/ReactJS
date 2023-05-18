
// //With Using Props
// import "./App.css"

// function New(props){
//   return(
//     // <h1>New Component</h1>
//     <h1>{props.name}</h1>
//   );
// }
// function App() {
//   return (
//     <h1 className="firstClass">
//       Hello 
//       <New name={"Niel"}/>
//       <New name={"Nitin"}/>
//       <New name={"Mukesh"}/>
//       EveryOne
//     </h1>
//   );
// }

// export default App;


// //Without Usin Props
// import "./App.css"


// function New({fame,name}){
//   return(
//     // <h1>New Component</h1>
//     <>
//     <h1>{fame} {name}</h1>
//     <hr/>
//     </>
//   );
// }
// function App() {
//   return (
//     <h1 className="firstClass">
//       Hello 
//       <New name={"Niel"} fame={"SuperStar"}/>
//       <New name={"Nitin"}/>
//       <New name={"Mukesh"}/>
//       EveryOne
//     </h1>
//   );
// }

// export default App;

// // Component files

// import Main 
// from "./Components/header"
// import { Header1,Header2 } 
// from "./Components/header";
// function App(){
//   return(
//     <>
//     <h1>Hello Ones</h1>
//     <Header1/>
//     <Header2/>
//     <Main/>  
//     </>
//   );
// }
// export default App;

// //Variable Instialization in components

// const a=4;
// function App(){
//   const b= 5;
//   return(
//     <>
//     <h1>{b}</h1>
//     <h1>{a}</h1>
//     </>
//   );
// }

// export default App;

// //Styling with CSS

// import Header from "./Components/header"
// import "./App.css";
// const a=4;
// function App(){
//   const b= 5;
//   return(
//     <>
//       <div style={{color:"brown"}}>Color</div>
//       <Header/>
//     </>
//   );
// }

// export default App;

// //JS vs JSX

// import Header from "./Components/header"
// import Home from './Components/Home'
// import "./App.css";
// function App(){

  
//   return(
//     <>
//       <Header/>
//       <Home/>
//     </>
//   );
// }

// export default App;

//useState Hooks

import Header from "./Components/header"
import Home from './Components/Home'
import Home1 from "./Components/Home1";
import "./App.css";
function App(){
  return(
    <>
      <Header/>
      <Home/>
      <Home1/>
    </>
  );
}
export default App;
