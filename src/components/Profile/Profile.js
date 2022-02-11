import React from 'react';
import "./profile.css";
import { Details } from './Details/Details';
import Photo from "./Photo/Photo"

function Profile() {
    return (
      <div className="profilebody" >
        
        <div>
          <Photo />
        </div>
       <Details/>
      </div>
    );
}

export default Profile