import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSingleUser } from "../../store/users";
import './UserImage.css'

const UserImage = ({ user }) => {

const [ imageLoaded, setImageLoaded ] = useState("loading")
const [ imageErrored, setImageErrored ] = useState("")

const handleImageLoaded = () => setImageLoaded("loaded")

const handleImageErrored = () => setImageErrored("failed to load")

function displayUserImage (user){
  return (
    <img
      className="user-image"
      src={user.image_url}
      onLoad={handleImageLoaded}
      onError={handleImageErrored}
    />
  )
}

    return (
      <div className="user_photo">
        {user.image_url ?  displayUserImage(user) : null
        }
      </div>
    );
}

export default UserImage;
