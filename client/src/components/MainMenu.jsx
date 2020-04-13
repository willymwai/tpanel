import React, {Component} from "react";
import LogoWhite from "../media/logo-white.svg";
import {
    faUser, faBell, faSignOutAlt, faCogs,
    faLock, faLanguage, faPaintBrush, faEnvelope,
    faTicketAlt, faDollarSign, faPlusSquare, faSync,
    faTh, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {linkItemOnClick} from "../functions/componentFunctions";
import {clientBaseUrl} from "../functions/baseUrls";

export default class MainMenu extends Component {

    usernameDropDown(label, icon, key) {
        return <a className="dropdown-item main-menu-dropdown-item" href="#" key={key}>
            <div className="mt-2 mb-2">
                <FontAwesomeIcon icon={icon}/>
                <span className="ml-1">{label}</span>
            </div>
        </a>
    }

    handleLogout(e) {
        e.preventDefault();
        linkItemOnClick(e, '/login', 'soft', this.props, clientBaseUrl());
    }

    render() {
        let username_dropdown_items = [
            {label: 'Account Preferences', icon: faCogs},
            {label: 'Password & Security', icon: faLock},
            {label: 'Change Language', icon: faLanguage},
            {label: 'Change Style', icon: faPaintBrush},
            {label: 'Contact Information', icon: faEnvelope},
            {label: 'View Support Tickets', icon: faTicketAlt},
            {label: 'View Billing Information', icon: faDollarSign},
            {label: 'Upgrade/Downgrade', icon: faPlusSquare},
            {label: 'Reset Page Settings', icon: faSync}
        ]

        let username_dropdown = username_dropdown_items.map((item, key) => {
            return this.usernameDropDown(item.label, item.icon, key);
        })

        return (
            <div>
                <nav className="shadow-sm navbar navbar-expand-lg navbar-dark bg-dark-blue">
                    <a className="navbar-brand" href="#">
                        <img src={LogoWhite} alt="" height="35"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <form className="form-inline my-2 my-lg-0 menu-item-border">
                                <input
                                    className="form-control mr-sm-2 bg-dark-blue form-control-sm border-0 menu-search"
                                    type="search"
                                    autoFocus={true}
                                    placeholder="Search(/)"
                                    aria-label="Search"/>
                            </form>
                            <li className="nav-item dropdown active menu-item-border">
                                <a className="nav-link dropdown-toggle mr-1 ml-1" href="#" id="navbarDropdown"
                                   role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} color="#fff"/>
                                    <span className="menu-labels ml-sm-1">{localStorage.username}</span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {username_dropdown}
                                </div>
                            </li>
                            <li className="nav-item active menu-item-border">
                                <a className="nav-link" href="#" tabIndex="-1"
                                   aria-disabled="true">
                                    <FontAwesomeIcon icon={faBell} color="#fff" className="ml-2 mr-2"/>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-1" href="#" tabIndex="-1"
                                   aria-disabled="true"
                                   onClick={(e) => this.handleLogout(e)}>
                                    <FontAwesomeIcon icon={faSignOutAlt} color="#fff"/>
                                    <span className="menu-labels ml-sm-1">LOGOUT</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="shadow col-md-1 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column align-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link text-center" href="#">
                                            <FontAwesomeIcon icon={faTh} color="#293a4a" className="sidebar-icons"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-center" href="#">
                                            <FontAwesomeIcon icon={faUsers} color="#777" className="sidebar-icons"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="col">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
