// import React from "react";
// import { useState } from "react";

// const inputStyle = { padding: 20, border: "1px solid rgba(0,0,0,0.4)" };
// const btnStyle = {
//   padding: 20,
//   border: "none",
//   backroundColor: "#f1f1f1",
//   margin: 10,
// };
// const Home1 = () => {
//   const [inputValue, setInputValue] = useState(0);

//   const decrement = () => {
//     setInputValue(inputValue - 1);
//   };
//   const increment = () => {
//     setInputValue(inputValue + 1);
//   };

//   return (
//     <>
//       <input type="number" 
//        style={inputStyle}  placeholder="Enter Something" />
//       <button style={btnStyle} onClick={decrement}>
//         -
//       </button>
//       <button style={btnStyle} onClick={increment}>
//         +
//       </button>
//     </>
//   );
// };

// export default Home1;

import React from "react";
import { useState } from "react";

const inputStyle = { padding: 20, border: "1px solid rgba(0,0,0,0.4)" };
const btnStyle={padding:20,border:"none",backroundColor:"#f1f1f1",margin:10}



const Home1 = () => {
  const[inputValue,setInputValue]=useState(0);
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

export default Home1;
