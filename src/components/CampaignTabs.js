import React from 'react';
import './CampaignTabs.css';

export default function CampaignTabs(props) {
    const {handleTabClick} = props;
    return (
        <div class="tabs">
            <span class="ind-tab" onClick={(e) => {handleTabClick(e)}}>UPCOMING CAMPAIGNS</span>
            <span class="ind-tab" onClick={(e) => {handleTabClick(e)}}>PAST CAMPAIGNS</span>
            <span class="ind-tab" onClick={(e) => {handleTabClick(e)}}>LIVE CAMPAIGNS</span>
        </div>
    );
};