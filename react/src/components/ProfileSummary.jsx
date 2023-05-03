import React from "react";
import './_ProfileSummary'


const ProfileSummary = ({ name, img, address }) => (
    <header>
        <div className="cnt-usr-info">
            <img src={img} alt={name} />
            <div className="cnt-description">
                <strong>{name}</strong>
                <span>{address}</span>
            </div>
        </div>
        <button>follow</button>
    </header>);


export default ProfileSummary;