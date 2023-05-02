import React from "react";
import './ProfileSummary.scss'


function ProfileSummary({ name, img, address }) {
    return (
        <div className="cnt-profile-summary">
            <div className="cnt-usr-info">
                <img src={img} alt={name} />
                <div className="cnt-description">
                    <strong>{name}</strong>
                    <span>{address}</span>
                </div>
            </div>
            <button>follow</button>
        </div>);
}

export default ProfileSummary;