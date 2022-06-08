import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { refreshTokenInitiate } from '../../../redux/actions/authActions'
import axios from "../../api/axios" 

const RefreshToken = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(refreshTokenInitiate())
    // const refresh = () => {
    //     axios.get("/refreshToken", {
    //         withCredentials: true
    //        })
    //       .then((response) => {
    //         console.log(response);
    //         // dispatch(refreshTokenSuccess(response.data.token))
    //       })
    //       .catch((error) => {
    //         console.log(error.response);
    //         // dispatch(refreshTokenFail(error.response))
    //       })
    //   }
    //   refresh()
      
    }, [])
    

  return (
    <div>
        RefreshToken
    </div>
  )
}

export default RefreshToken