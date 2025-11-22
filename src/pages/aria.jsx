import { useRef, useState } from "react";


function Aria(){
    const [isOpen,setIsopen] = useState(false);
    const menuRef = useRef();
    
    const toggle = ()=>{
        setIsopen(o=>!o)
    }
    const handleKey = (e)=>{
        if(e.key==="ArrowDown"){
            setIsopen(true);
            menuRef.current.focus();
        }
    }

    const controlKey = (index,e)=>{
        if(e.key==="ArrowDown"){
            menuRef.current.focus([(index+1)%3])
        }else if(e.key==="ArrowUp"){
            menuRef.current.focus([(index-1+3)%3])
        }else if(e.key==="Escap"){
                setIsopen(false);
            }
        
    }

    return(
        <>
        <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKey}
        >MenuItems</button>
        
        {["home","menu","cart"].map((m,i)=>(
           <div key={i} role="button" aria-label="menu" onClick={(e)=>controlKey(i,e)}>
            {m}
           </div>
        ))}
        </>
    )
}