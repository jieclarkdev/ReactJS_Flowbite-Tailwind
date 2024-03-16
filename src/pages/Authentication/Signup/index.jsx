import { Button, FloatingLabel } from "flowbite-react";
import BaseTheme from "../../../components/BaseTheme";
import { useDispatch, useSelector } from "react-redux";
import { storeToken, storeUser } from "../AuthSlice/authSlice";
import { useState } from "react";

export default function Signup(){
    // const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        
    })

    const  [token, setToken] = useState('')

   

    const handleSubmit = function(event){
        event.preventDefault();
        setToken(Math.random().toString(36).substring(2).repeat(3));
        dispatch(storeUser(data));
        dispatch(storeToken(token));
        
    }

    return (
      <BaseTheme center={true}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <FloatingLabel
              variant="outlined"
              label="First Name"
              onChange={(event) => {
                setData({ ...data, firstName: event.target.value });
              }}
            />
            <FloatingLabel
              variant="outlined"
              onChange={(event) =>
                setData({ ...data, lastName: event.target.value })
              }
              label="Last Name"
            />
            <FloatingLabel
              variant="outlined"
              onChange={(event) =>
                setData({ ...data, Email: event.target.value })
              }
              label="Email"
            />
            <Button type="submit">Register</Button>
          </div>
        </form>
      </BaseTheme>
    );
}