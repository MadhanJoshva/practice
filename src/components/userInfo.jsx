import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "../user/userSlice.jsx";


function UserInformation(){
const dispatch = useDispatch();
const {userInfo} = useSelector(state=>state.user)
const handleLogin = ()=>{
    dispatch(login({name:"madhan",email:"madhan@123"}));
}
const handleLogout = ()=>{
    dispatch(logout(null))
}
return(
    <div>
        {userInfo? (
            <div>
            <h1>  
                Welcome, {userInfo.name} </h1>
            <button onClick={handleLogout}>Logout</button>
            </div>

        ):(
             <button onClick={handleLogin}>Login</button>
        )
        }
    </div>
)
}

export default UserInformation;