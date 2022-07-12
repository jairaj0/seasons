import React from 'react';
import './Team.css';

export const Member = ({profile , name , bio , moreInfo}) => {
    return (
        <div className="member flex">
            <div className="profile flex-center"><img src={profile} alt="profilePic" /></div>
            <div className="info flex-center">
                <h1 className="name">{name}</h1>
                <h4 className="bio">{bio}</h4>
                {moreInfo}
            </div>
        </div>
    )
}
