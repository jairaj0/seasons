import React from 'react';
import { Maps } from './Maps';
import './Roadmap.css';

export const Roadmap = () => {
    return (
        <div className="roadmap " id="roadmap">
            <div className="container">
            <h1 className="section_title">Business & Project Roadmap 2021</h1>
            <p className="section_dis">Here's where we are and here's where we're going</p>
            <Maps
            title="August"
            content={
                <ul>
                    <li>800 Ascended Unicorns membership tokens issued to early Discord supports before Pre-Sale</li>
                    <li>U_U elements reveal</li>
                    <li>U_U official website published</li>
                </ul>
            }
             />
            <Maps
            title="August"
            content={
                <ul>
                    <li>800 Ascended Unicorns membership tokens issued to early Discord supports before Pre-Sale</li>
                    <li>U_U elements reveal</li>
                    <li>U_U official website published</li>
                </ul>
            }
             />
            <Maps
            title="August"
            content={
                <ul>
                    <li>800 Ascended Unicorns membership tokens issued to early Discord supports before Pre-Sale</li>
                    <li>U_U elements reveal</li>
                    <li>U_U official website published</li>
                </ul>
            }
             />
            <Maps
            title="August"
            content={
                <ul>
                    <li>800 Ascended Unicorns membership tokens issued to early Discord supports before Pre-Sale</li>
                    <li>U_U elements reveal</li>
                    <li>U_U official website published</li>
                </ul>
            }
            end={true}
             />
            </div>

            <div id="team"></div>
        </div>
    )
}
