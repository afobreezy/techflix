import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useGetCurrentUserMutation } from "../lib/userApi";
import { useParams } from "react-router-dom"

const StreamMovie = () => {

    const navigate = useNavigate()

    // const [getCurrentUser, {isSuccess, isError}] = useGetCurrentUserMutation();
    const {user} = useSelector((state) => state.userState)

    const params = useParams()

    const {id} = params;


    // useEffect(() => {
    //     getCurrentUser()
    // }, [params])


    // useEffect(() => {
    //     if(!user) {
    //         navigate(`/movie/${id}`)
    //     }
    // }, [isSuccess, isError])

    return <>
    
    <div>
       <iframe width="100%" height="500px" src={`https://vidsrc.xyz/embed/movie/${id}`}></iframe>
    </div>
    
    </>
}




export default StreamMovie;