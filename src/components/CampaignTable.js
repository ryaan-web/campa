import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CampaignTable.css';

export default function CampaignTable(props) {
    return (
        <div class="campaign-table">
            <div class="campaign-table-header">
                <span class="campaign-table-header-col">S. No.</span>
                <span class="campaign-table-header-col">DATE</span>
                <span class="campaign-table-header-col">DAYS</span>
                <span class="campaign-table-header-col">CAMPAIGN</span>
                <span class="campaign-table-header-col">VIEW</span>
                <span class="campaign-table-header-col">ACTIONS</span>
            </div>
            {props.campaigns.map((ele, i) => {
                return  <ul class="campaign-table-item">
                    <li class="campaign-table-item-col">{ele.id}</li>
                    <li class="campaign-table-item-col">{ele.happensAt}</li>
                    <li class="campaign-table-item-col">{props.calculateDays(ele)<0 ? Math.abs(props.calculateDays(ele)) + " days before" : props.calculateDays(ele) + " days later" }</li>
                    <li class="campaign-table-item-col">{ele.campaign}</li>
                    <li class="campaign-table-item-col">{ele.daysAheadAgo}</li>
                    <li class="campaign-table-item-col">
                        <span class="actions-items" onClick={(e) => {props.handleViewClick(e, ele)}}>View</span> &nbsp;&nbsp;
                        <span class="actions-items" onClick={(e) => {props.activateDatePicker(e, ele)}}>Re-Schedule</span>
                        {props.isDatePickerActive && <DatePicker onChange={(date) => {props.handleDateChange(date)}}></DatePicker>}
                    </li>
                </ul>
            })}
        </div>
    );
};