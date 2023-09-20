/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context, server } from "../main"
import axios from "axios";
import toast from "react-hot-toast";


const Header = () => {

const {isAuthenticated,setIsAuthenticated,loading,setLoading}=useContext(Context);


const logoutHandler = async (e) => {
setLoading(true)
  try {

      await axios.get(
        `${server}/users/logout`,
     
        {
         
          withCredentials: true,
        }
      );
      toast.success("Logout  successfully");
      setIsAuthenticated(false)
} catch (error) {
toast.error(error.response.data.message);
setIsAuthenticated(true)
setLoading(false)
}
};

console.log(isAuthenticated);


  return (
<nav className="header">
    <div>
    <Link to={'/'}>

        <h2>Todo App.</h2>
    </Link>
    </div>
    <article>
        <Link to={'/'} >Home</Link>
        <Link to={'/profile'} >Profile</Link>
        {
          isAuthenticated ?(<button className="btn" disabled={loading} onClick={logoutHandler}>Logout</button>) :(<Link to={'/Login'}>Login</Link>)
        }

    
    </article>
</nav>
  )
}

export default Header