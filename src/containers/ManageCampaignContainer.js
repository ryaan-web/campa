import React from 'react';
import moment from 'moment';
import appContants from '../constants/appConstants';
import CampaignTabs from '../components/CampaignTabs';
import CampaignTable from '../components/CampaignTable';
import { Modal } from '@material-ui/core';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ManageCampaignContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: appContants.TAB_TITLES.UPCOMING_CAMPAIGNS,
            selectedLanguage: appContants.LANG_LIST.ENGLISH,
            isViewModalOpen: false,
            selectedCampaign: null,
            isDatePickerActive: false
        };
    }

    handleTabClick = (tab) => {
        this.setState({
            selectedTab: tab
        })
    }

    handleRescheduleClick = (e) => {
        alert(e.target.innerHTML);
    }

    handleModalOpen = (e, ele) => {
        this.setState({
            isViewModalOpen: true,
            selectedCampaign: ele
        })
    }

    handleModalClose = () => {
        this.setState({
            isViewModalOpen: false
        })
    }

    calculateDays = (campaign) => {
        let diff = moment(campaign.happensAt).diff(moment(), 'day');
        return diff;
    }

    activateDatePicker = (e, ele) => {
        this.setState({
            isDatePickerActive:true,
            selectedCampaign: ele
        })
    }

    deactivateDatePicker = () => {
        this.setState({
            isDatePickerActive:false
        })
    }

    handleDateChange = (date) => {
        this.selectedCampaign.happensAt = moment(date);
    }


    render() {
        return (
            <div class="manage-capaign-container">
                <div class="campaign-tabs">
                    <CampaignTabs tabs={appContants.TAB_TITLES} handleTabClick={this.handleTabClick} selectedTab={this.state.selectedTab}></CampaignTabs>
                </div>
                <div class="campaign-table-container">
                    <CampaignTable
                        campaigns={appContants.CAMPAIGNS_LIST}
                        handleRescheduleClick={this.handleRescheduleClick}
                        handleViewClick={this.handleModalOpen}
                        isModalOpen={this.state.isViewModalOpen}
                        calculateDays={this.calculateDays}
                        activateDatePicker={this.activateDatePicker}
                        deactivateDatePicker={this.deactivateDatePicker}
                        isDatePickerActive={this.state.isDatePickerActive}
                        handleDateChange={this.handleDateChange}
                        selectedTab={this.state.selectedTab}>
                    </CampaignTable>
                </div>
                    <Modal className="modal-content" open={this.state.isViewModalOpen} onClose={this.handleModalClose} hideBackdrop={false}>
                        <div class="modal-details">
                            <div class="modal-items">campaign name: {this.state.selectedCampaign && this.state.selectedCampaign.campaign} </div>
                            <div class="modal-items">date: {this.state.selectedCampaign && this.state.selectedCampaign.happensAt}</div>
                            <div class="modal-items">days: {this.state.selectedCampaign && (this.calculateDays(this.state.selectedCampaign) < 0 ? Math.abs(this.calculateDays(this.state.selectedCampaign)) + ' days before': this.calculateDays(this.state.selectedCampaign) + ' days later')} </div>
                        </div>
                    </Modal>
            </div>
        )
    }
}