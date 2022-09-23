import React from 'react'
import { useNavigate } from "react-router-dom";
import loader from "../assets/loader.gif";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {setAvatarRoute} from "../utils/APIRoutes";

export default function setAvatar() {
  const api = "https://api.multiavatar.com/456644556";
  const navigate = useNavigate();
  const [avatars,setAvatars] = useState({});
  const [isLoading,setIsLoading] = useState(true);



  return (
    <>
        <Container>
            <div className="title-container">
                <h1>pick an avatar</h1>
            </div>
            <div className="avatars">

            </div>
        </Container>
        <ToastContainer/>
    </>
  )
}

const Container = styled.div``;
