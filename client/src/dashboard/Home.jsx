import React, {Component} from "react";
import cardCategories from "./cardCategories";
import "./icons-map.css";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Home extends Component {

    categoryCard(title, items) {
        let card_items = items.map(function (item) {
            return <div className="col-md-4 mt-3">
                <a href="#" className={`category-item-image-wrapper ${item.icon}`}/>
                <a href="#" className="ml-2">{item.title}</a>
            </div>
        });
        return (
            <div className="card mt-3 category-card">
                <div className="card-header bg-dark-blue-1 text-white">
                    {title}
                    <a href="#">
                        <FontAwesomeIcon icon={faMinus} className="float-right" color="#fff"/>
                    </a>
                </div>
                <div className="card-body">
                    <div className="row">
                        {card_items}
                    </div>
                </div>
            </div>
        )
    }

    infoSideCard(title, side_card_categories, side_card_data) {
        let card_items = side_card_categories.map(function (item) {
            return <div className="row border-bottom p-2">
                <div className="col-md-12">
                    <span className="side-card-label">{item.title}</span>
                </div>
                <div className="col-md-12 mt-1">
                    <span>{side_card_data[item.key]}</span>
                </div>
            </div>
        });
        return (
            <div className="card mt-3 category-card">
                <div className="card-header bg-dark-blue-1 text-white">
                    {title}
                </div>
                <div className="card-body">
                    {card_items}
                </div>
            </div>
        )
    }

    render() {
        let card_categories = cardCategories.cardCategories();
        let side_card_categories = cardCategories.sideCardCategories();
        let categories_cards = card_categories.map((category) => {
            return this.categoryCard(category.title, category.items)
        });
        let side_card_data = {
            current_user: 'username',
            primary_domain: 'https://domain.com',
            shared_ip_address: '192.168.0.1',
            home_directory: '/home/domain',
            last_login_ip: '192.168.1.1'
        }
        let general_info_card = this.infoSideCard(
            'GENERAL INFORMATION', side_card_categories['general_information'], side_card_data
        );
        let statistics_card = this.infoSideCard(
            'STATISTICS', side_card_categories['statistics'], side_card_data
            )
        ;
        return (
            <div className="row">
                <div className="col-md-9 mt-3">
                    <input type="text" className="form-control"
                           placeholder="Find functions quickly by typing here"
                    />
                    {categories_cards}
                </div>
                <div className="col-md-3">
                    {general_info_card}
                    {statistics_card}
                </div>
            </div>
        )
    }
}
