import React, {useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
const ProfileRequest = () => {
    const {userID} = useParams();
    let history = useHistory();
    const handleSubmit = (e,userID)=>{
        e.stopPropagation()
        history.push(`/profile/${userID}`)
    };
    return (
        <div>
            <div className="box">
                <div className="box1">
                    <form action="">
                    <button onClick={(e)=> handleSubmit(e, userID)} className="btn btn-warning">click here for more info</button>
                    </form>
                </div>
                <div className="box2"></div>
            </div>
        </div>
    )
}

export default ProfileRequest
