import React from 'react'
import { Animate } from '../Animate/Animate';
import './Story.css';

export const Story = () => {
    return (
        <div className="story" id="story">
        <div className="container">
        <h1 className="title">An Uninteresting Origin Story</h1>
        <p className="dis">Where it all began...</p>
        <div className="flex-between story_data">
        <div className="gif"><Animate /></div>

        <div className="story_txts">
            <h1><span>BEING MAGICAL AND CUTE GOT BORING</span> so the unicorns started fighting to bring excitement to their lives. But after a while even that wasn’t enough, so now they’re just uninterested and blasé, isolating themselves in the Grand Valley.</h1>
            <h1><span>THE SOCIETY OF UNICORNS</span> divided into different clans, each clan asserting dominance in one domain: fire, water, air, and earth. As they expected, creating such a monopoly over the elements of life resulted in friction between the clans, which soon led to wars.</h1>

        </div>
        </div>
        </div>
        </div>
    )
}
