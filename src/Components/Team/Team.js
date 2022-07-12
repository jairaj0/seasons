import React from 'react';
import { Member } from './Member';
import './Team.css';
import tej from '../../Assets/tej2.png'
import tony from '../../Assets/tony.png'
import prince from '../../Assets/prince.png'
import danny from '../../Assets/danny.png'
import fredd from '../../Assets/fredd.png'

export const Team = () => {
    return (
        <div className="team">
        <h1 className="section_title">The Team</h1>
        <div className="section_dis">These are the people who make unicorn dreams come true</div>
            <div className="container members flex">
            <Member
            profile={tony}
            name={"Tony"}
            bio={"MARKETING & BUSINESS DEVELOPMENT"}
            moreInfo={
            <div className="moreInfo">
            <p>- Founded an esports & gaming start-up in Asia, raising US$2.5 million in venture capital.</p>
            <p>- Co-founder of the Asian Mint, NFT media platform for Asian Collectors.</p>
            <p>- In charge of Marketing, Business Development and Partnerships for U_U project.</p>
            </div>
            }
            />
            <Member
            profile={prince}
            name={"Prince"}
            bio={"MARKETING & BUSINESS DEVELOPMENT"}
            moreInfo={
            <div className="moreInfo">
            <p>- Founded an esports & gaming start-up in Asia, raising US$2.5 million in venture capital.</p>
            <p>- Co-founder of the Asian Mint, NFT media platform for Asian Collectors.</p>
            <p>- In charge of Marketing, Business Development and Partnerships for U_U project.</p>
            </div>
            }
            />
            <Member
            profile={danny}
            name={"Danny"}
            bio={"MARKETING & BUSINESS DEVELOPMENT"}
            moreInfo={
            <div className="moreInfo">
            <p>- Founded an esports & gaming start-up in Asia, raising US$2.5 million in venture capital.</p>
            <p>- Co-founder of the Asian Mint, NFT media platform for Asian Collectors.</p>
            <p>- In charge of Marketing, Business Development and Partnerships for U_U project.</p>
            </div>
            }
            />
            <Member
            profile={fredd}
            name={"Fredd"}
            bio={"MARKETING & BUSINESS DEVELOPMENT"}
            moreInfo={
            <div className="moreInfo">
            <p>- Founded an esports & gaming start-up in Asia, raising US$2.5 million in venture capital.</p>
            <p>- Co-founder of the Asian Mint, NFT media platform for Asian Collectors.</p>
            <p>- In charge of Marketing, Business Development and Partnerships for U_U project.</p>
            </div>
            }
            />
            <Member
            profile={tej}
            name={"Tej"}
            bio={"MARKETING & BUSINESS DEVELOPMENT"}
            moreInfo={
            <div className="moreInfo">
            <p>- Founded an esports & gaming start-up in Asia, raising US$2.5 million in venture capital.</p>
            <p>- Co-founder of the Asian Mint, NFT media platform for Asian Collectors.</p>
            <p>- In charge of Marketing, Business Development and Partnerships for U_U project.</p>
            </div>
            }
            />
            </div>
        </div>
    )
}
