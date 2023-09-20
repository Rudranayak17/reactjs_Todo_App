import  { useContext, useEffect } from "react";
import { Context, server } from "../main";
import Loader from "../components/Loader";
import axios from "axios";

const Profile = () => {
  const {  loading, user,setUser } = useContext(Context);
  
  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      }) .then((res) => {
        setUser(res.data.user);
      })
      

      
  }, [setUser]);


  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;