import React from 'react';
import './CampaignTabs.css';
import appConstants from '../constants/appConstants';

export default function CampaignTabs(props) {
    const {handleTabClick} = props;
    return (
        <div class="tabs">
            <span class="ind-tab" onClick={(e) => {handleTabClick(appConstants.TAB_TITLES.UPCOMING_CAMPAIGNS)}}>UPCOMING CAMPAIGNS</span>
            <span class="ind-tab" onClick={(e) => {handleTabClick(appConstants.TAB_TITLES.LIVE_CAMPAIGNS)}}>PAST CAMPAIGNS</span>
            <span class="ind-tab" onClick={(e) => {handleTabClick(appConstants.TAB_TITLES.PAST_CAMPAIGNS)}}>LIVE CAMPAIGNS</span>
        </div>
    );
};