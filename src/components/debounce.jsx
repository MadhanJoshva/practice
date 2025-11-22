import { useEffect, useRef, useState } from "react";


 function Main(){
  /*  const [query,setQuery] = useState("");
    const inputRef = useRef();
function debounce(fuc,delay){
    let timeout;
    return function(...arg){
       clearTimeout(timeout);
       timeout = setTimeout(()=>{
      fuc(...arg)
       },delay);
       console.log(window.innerHeight,window.innerWidth);
       
    }
} */

useEffect(()=>{
inputRef.current.focus();

},[])

const handleSearched = debounce((value)=>{
console.log("Deebounce fuction is called",value);
},3000)
return(
    <div className="flext justify-center items-center">
    <input type="text" ref={inputRef} placeholder="Enter some thing" onChange={(e)=>{setQuery(e.target.value)
     handleSearched(e.target.value)}
    } />{query}
    </div>
)
}

export function useDebounce(value,delay){
    const [debounce,setDebounce] = useState(value);
    useEffect(()=>{
     const timer = setTimeout((value)=>{
     console.log(value);
     setDebounce(value)
     },delay)
     return ()=>clearTimeout(timer)
    },[value,delay])
    return debounce;
}

export default Main;


