import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Suspense,lazy } from 'react'
import Cart from './components/cart.jsx'
import ProductList from './components/products.jsx'
import UserInformation from './components/userInfo.jsx'
import {Count} from './components/react.memo.jsx'
import { MainFuction } from './components/react.memo.jsx'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from './components/errorbondar.jsx'
import PasswordStregth from './password.jsx'
import Main from './components/debounce.jsx'
import FoodCarousel from './pages/cuosal.jsx'
import Antd from './pages/antd.jsx'

const Home = lazy(()=>import('./components/home.jsx'));
const Boostrap = lazy(()=>import('./boostrap.jsx'))
function Todo ({todo,onDelete,onSave,onToggle}){
const [edit,setEdit] = useState(false);
const [text,setText] = useState(todo.text);
useEffect(()=>
  
setText(todo.text)
  ,[todo.text]
)

  return(
    <>
    <input type="checkbox" checked={todo.complete} onChange={()=>onToggle(todo.id)} />
    {edit?(
      <>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
     <button onClick={()=>{
      if(text.trim())
      {
      onSave(todo.id,text.trim());
      setEdit(false)
      }}}>Save
      </button>
      <button onClick={()=>{setText(todo.text);setEdit(false)}}>Cancel</button>
      </>
    ):(
   <>
   <span style={{textDecoration: todo.complete ? "line-through" : "none", flex: 1}}>{todo.text}</span>
   <button onClick={()=>setEdit(true)}>Edit</button>
   <button onClick={()=>onDelete(todo.id)}>Delete</button>
   </>
    )}
  

    </>
  )
}

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");
  const [filter,setFilter] = useState("all");
  const inputRef = useRef();
  const menuItems = [
  { name: "Pizza", description: "Cheesy delight", image: "/images/pizza.jpg" },
  { name: "Burger", description: "Juicy burger", image: "/images/burger.jpg" },
  { name: "Pasta", description: "Italian classic", image: "/images/pasta.jpg" },
];


  const addTodo = ()=>{
    const trimed = input.trim();
    if(!trimed){
     return alert("please add todo");
    }
    setTodos([{id:Date.now(),text:input,complete:false},...todos]);
    setInput("");
  }
  useEffect(()=>{
   const raw = localStorage.getItem("todo")
   inputRef.current.focus();
   if(raw){
    setTodos(JSON.parse(raw));
   }
  },[])

  useEffect(()=>{
  localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])
  const toggle = (id)=>setTodos(todos.map(t=>t.id === id?{...t,complete:!t.complete}:t));
  const deleted = (id)=>setTodos(todos.filter(t=>t.id !== id));
  const saveTodo = (id,newText)=>setTodos(todos.map(t=>t.id === id?{...t,text:newText}:t));

  const filterd = todos.filter(t=>(filter==="all"?true:filter==="active"?!t.complete:t));


  return (
    <>
<div>
  <input type="text" ref={inputRef} value={input} onChange={(e)=>setInput(e.target.value)} placeholder='add todo' />
  <button onClick={addTodo}>Add To Do</button>
</div>
<div>
  <button onClick={()=>setFilter("all")} disabled={filter==="all"}>
    All
  </button>
  <button onClick={()=>setFilter("active")} disabled={filter==="active"}>
    Active
  </button>
  <button onClick={()=>setFilter("completed")} disabled={filter==="completed"}>
    Complete
  </button>
</div>
  <ul>
    <li>
      {filterd.length=== 0?<div>Todo Is Not Found</div>:
      filterd.map(t=>
        <Todo key={t.id} todo={t} onToggle = {toggle} onDelete={deleted} onSave = {saveTodo}/>
      )
      }
    </li>
  </ul>

      <Antd/>
    {/* <UserInformation/>
 
    <Cart/>
    <PasswordStregth/>
    <Count/>
    <Main/>
    <MainFuction/> */}
    {/* <Router>
       <ErrorBoundary 
       FallbackComponent={ErrorFallBack}>
         <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path='/product/:id' element = {<ProductList/>}/>
        <Route path="/boos" element={<Boostrap/>}/>
        <Route path='/sal' element={<FoodCarousel menuItems={menuItems}/>}/>
        </Routes>
        </Suspense>
       </ErrorBoundary> */}
      
    {/* </Router> */}
    </>
  )
}

export default App
