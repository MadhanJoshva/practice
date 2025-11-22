import { useEffect, useState } from "react";

function LoginGoogle(){
    const [data,setData] = useState({
        name:"",
        email:"",
        id:""
    });
   
        const handleChange = (e)=>{
            const {name,value} = e.target
               setData((prev)=>({...prev,[name]:value})) 
        }

    const Submit = async (e)=>{
        e.preventDefault();
      const res =  await axios.post("auth/user",data);
      
      useEffect(()=>{
       if(res.success){
       const token = localStorage.setItem("token",res.data.token)
       }
       setData({
        name:"",
        email:"",
        id:""
       })
      },[token])
    }
return(
    <form className="" onSubmit={Submit}>
    <div className="flex justify-center items-center border border-gray-500 text-gray-900">
    <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Write Your Name" />
    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter Your Email" />
    <input type="number" name='id' value={data.id} onChange={handleChange} placeholder="Enter Your Id" /> 
    </div>
    </form>
   

)
}