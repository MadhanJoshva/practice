import { useState,memo,useMemo,useCallback,useRef} from "react";


const TodoItem = memo(function ({todo}){
      console.log("react re renders",todo.text);
return(
    <>
    <li>{todo.text}</li>
    </>)
})
function Count(){
    const [count,setCount] = useState(0);
    const todos =useMemo(()=>[{id:"1",text:"learn react.memo"}],[todos])

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Increment:{count}</button>
        {todos.map(t=>(<TodoItem key={t.id} todo={t}/>))}
        </>
    )
}

const Clicked = memo(function ({clicked}){
    console.log("clicked");
    
    return(
        <>
        <button onClick={clicked}>PREVENT</button>
        </>
    )
})

function MainFuction(){
    const [text,setText] = useState("madhan");
   console.log("parent re-renders");
   
    const handleClick = useCallback(()=>{
        console.log("button Clicked");
        
    },[])
    return(
        <>
        <p>Increment:{text}</p>
        <button onClick={()=>setText(text+"madhan")} >Clcik</button>
        <Clicked clicked={handleClick}/>
        </>
    )
}

export {Count,MainFuction};