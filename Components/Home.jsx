// //Without using useState Hooks
// import React from "react";
// const inputStyle = { padding: 20, border: "1px solid rgba(0,0,0,0.4)" };
// const btnStyle={padding:20,border:"none",backroundColor:"#f1f1f1",margin:10}

// // let inputValue = 0;

// // const changeHandler= (e) => {
// //   inputValue = e.target.value;
// //   console.log(inputValue);
// // }


// const Home = () => {
//   let inputValue=0;
//   const decrement=()=>{
//       inputValue--;
//   }
//   const increment=()=>{
//       inputValue++;
//   }

//   return (
//     <>
//       <input
//         style={inputStyle}
//         type="number"
//         placeholder="Enter Something"
//         // onChange={changeHandler}
//         value={inputValue}
//       />
//       <button style={btnStyle} oneClick={decrement}>-</button>
//       <button style={btnStyle} oneClick={increment}>+</button>
//     </>
//   );
// };

//     export default Home;

//With using useState Hooks
import React from "react";
import { useState } from "react";

const inputStyle = { padding: 20, border: "1px solid rgba(0,0,0,0.4)" };
const btnStyle={padding:20,border:"none",backroundColor:"#f1f1f1",margin:10}



const Home = () => {
  const[inputValue,setInputValue]=useState(0);
  // let inputValue=0;
  // console.log(inputValue);
  const decrement=()=>{
     setInputValue(inputValue-1) ;
  }
  const increment=()=>{
    setInputValue(inputValue+1) ;
  }

  return (
    <>
      <input
        style={inputStyle}
        type="number"
        placeholder="Enter Something"
        value={inputValue}
        readOnly
      />
      <button style={btnStyle} onClick={decrement}>-</button>
      <button style={btnStyle} onClick={increment}>+</button>
    </>
  );
};

export default Home;

// //More With using useState Hooks
// import React from "react";
// import { useState } from "react";

// const inputStyle = { padding: 20, border: "1px solid rgba(0,0,0,0.4)" };

// const Home = () => {
//   // const[inputValue,setInputValue]=useState(0);
//   let inputValue=0;
//   console.log(inputValue);

//   return (
//     <>
//       <input
//         style={inputStyle}
//         type="number"
//         placeholder="Enter Something"
//         value={inputValue}
//         // onChange={(e)=>{
//         //   setInputValue(e.target.value);
//         // }}
//         onChange={(e)=>{
//           inputValue= e.target.value;
//           // console.log(inputValue);
//         }}
//       />
//     </>
//   );
// };

// export default Home;
