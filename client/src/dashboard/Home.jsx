import React, {Component} from "react";
import cardCategories from "./cardCategories";
import "./icons-map.css";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUrlData, linkItemOnClick} from "../functions/componentFunctions";
import {
    setSessionVariable,
    fetchDataIfNeeded
} from '../actions/actions';
import {serverBaseUrl, clientBaseUrl} from "../functions/baseUrls";
import ComponentLoadingIndicator from "../components/ComponentLoadingIndicator";
import {UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            primary_domain: {},
            search: null,
            categories_match: [],
            collapsed_categories: []
        }
    }

    componentDidMount() {
        let collapsed_categories = JSON.parse(localStorage.collapsed_categories || '[]');
        this.setState({
            collapsed_categories: collapsed_categories
        });
        this.fetchUrlData(
            'website_list_url',
            '/cloudAPI/?controller=fetchWebsites',
            'POST',
            {
                controller: "fetchWebsites",
                serverUserName: localStorage.username,
                page: 1,
                recordsToShow: 10
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prev_website_list_fetching = (prevProps['website_list_data'] || {})['isFetching'];
        let website_list_fetching = (this.props['website_list_data'] || {})['isFetching'];
        if (prev_website_list_fetching !== website_list_fetching) {
            const {website_list_data} = this.props;
            let website_list = website_list_data['items'];
            if (!website_list_data['isFetching']) {
                website_list = JSON.parse(website_list['data'] || "[]");
            }
            if (website_list.length > 0) {
                this.fetchWebsiteData(website_list[0]['domain']);
                this.setState({
                    primary_domain: website_list[0]
                });
            }
        }
    }

    fetchUrlData = (var_name, url, method = 'GET', payload = {}) => {
        const {dispatch} = this.props;
        url = serverBaseUrl() + url;
        this.props.dispatch(setSessionVariable(var_name, url));
        dispatch(fetchDataIfNeeded(url, method, payload));
    };

    fetchWebsiteData = (domain) => {
        this.fetchUrlData(
            'primary_website_url',
            '/cloudAPI/?controller=fetchWebsiteData',
            'POST',
            {
                controller: "fetchWebsiteData",
                serverUserName: localStorage.username,
                domainName: domain
            }
        );
    }

    handleClickCategory(e, item) {
        e.preventDefault();
        if (item['path']) {
            let baseUrl = clientBaseUrl();
            let path = item['path'].replace('{primary_domain}', this.state.primary_domain['domain']);
            if (item['type'] === 'hard') {
                baseUrl = serverBaseUrl();
            }
            linkItemOnClick(e, path, item['type'], this.props, baseUrl, item['target']);
        }
    }

    handleCollapseCategory(e, title) {
        e.preventDefault();
        let collapsed_categories = this.state.collapsed_categories;
        if (collapsed_categories.includes(title)) {
            collapsed_categories = collapsed_categories.filter(function (category) {
                return category !== title;
            });
        } else {
            collapsed_categories.push(title);
        }
        localStorage.collapsed_categories = JSON.stringify(collapsed_categories);
        this.setState({
            collapsed_categories: collapsed_categories
        });
    }

    categoryCard(title, items, key) {
        let collapsed_categories = this.state.collapsed_categories;

        let card_items = items.map((item, key) => {
            let popover_key = item.title.replace(/\s+/g, '_');
            popover_key = `${popover_key}_popover_open`;
            let popover_open = this.state[popover_key] || false;
            let icon_object = <a href="#" className={`category-item-image-wrapper ${item.icon}`}
                                 onClick={(e) => this.handleClickCategory(e, item)}
            />
            if (item.image) {
                icon_object = <img src={item.image} alt="logo"/>
            }
            let item_link = [
                <a href="#"
                   onClick={(e) => this.handleClickCategory(e, item)}
                   className="ml-2"
                   id={popover_key}
                   title="Feature coming soon!"
                   data-content="This feature is still under construction."
                >
                    {item.title}
                </a>,
                <UncontrolledPopover trigger="focus" placement="bottom" target={popover_key}>
                    <PopoverHeader>Feature coming soon!</PopoverHeader>
                    <PopoverBody>This feature is still under construction.</PopoverBody>
                </UncontrolledPopover>
            ];
            if (item.path) {
                item_link = <a href="#" className="ml-2"
                               onClick={(e) => this.handleClickCategory(e, item)}>
                    {item.title}
                </a>
            }
            return <div className="col-md-4 mt-3" key={key}>
                {icon_object}
                {item_link}
            </div>
        });
        let card_body = '';
        let collapse_icon = faPlus;
        if (!collapsed_categories.includes(title)) {
            collapse_icon = faMinus;
            card_body = <div className="card-body">
                <div className="row">
                    {card_items}
                </div>
            </div>
        }
        return (
            <div className="card mt-3 category-card" key={key}>
                <div className="card-header bg-dark-blue-1 text-white">
                    {title}
                    <a href="#" onClick={(e) => this.handleCollapseCategory(e, title)}>
                        <FontAwesomeIcon icon={collapse_icon} className="float-right" color="#fff"/>
                    </a>
                </div>
                {card_body}
            </div>
        )
    }

    infoSideCard(title, side_card_categories, side_card_data) {
        let card_items = side_card_categories.map(function (item, key) {
            let statistics_value = '';
            if (typeof item.key === "object") {
                let used = side_card_data[item.key['used']] || 0;
                let allowed = side_card_data[item.key['allowed']] || 0;
                statistics_value = `${used} / ${allowed}`;
            } else {
                statistics_value = side_card_data[item.key];
            }
            return <div className="row border-bottom p-2" key={key}>
                <div className="col-md-12">
                    <span className="side-card-label">{item.title}</span>
                </div>
                <div className="col-md-12 mt-1">
                    <span>{statistics_value}</span>
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

    handleFilterCategories(search) {
        let card_categories = cardCategories.cardCategories();
        let categories_match = [];
        search = search.toLowerCase();
        card_categories.forEach(function (category) {
            let items_match = [];
            let items = category['items'];
            items.forEach(function (item) {
                if (item['title'].toLowerCase().includes(search)) {
                    items_match.push(item);
                }
            });
            if (items_match.length > 0) {
                let category_match = {
                    title: category['title'],
                    items: items_match
                }
                categories_match.push(category_match);
            }
        });
        this.setState({
            categories_match: categories_match,
            search: search
        });
    }

    render() {
        let card_categories = cardCategories.cardCategories();
        if (this.state.search) {
            card_categories = this.state.categories_match;
        }
        let side_card_categories = cardCategories.sideCardCategories();
        let categories_cards = card_categories.map((category, key) => {
            return this.categoryCard(category.title, category.items, key)
        });
        const {website_list_data, primary_website_data} = this.props;
        if (website_list_data['isFetching']) {
            return <ComponentLoadingIndicator/>
        }
        let website_list = website_list_data['items'];
        let primary_website_data_ = primary_website_data['items'];
        if (primary_website_data_ === []) {
            primary_website_data_ = {};
        }
        if (!website_list_data['isFetching']) {
            website_list = JSON.parse(website_list['data'] || "[]");
        }
        let primary_domain = '';
        let primary_domain_ip = '';
        if (website_list.length > 0) {
            let primary_domain_object = website_list[0];
            primary_domain = primary_domain_object['domain'];
            primary_domain_ip = primary_domain_object['ipAddress'];
        }
        let side_card_data = {
            current_user: localStorage.username,
            primary_domain: primary_domain,
            shared_ip_address: primary_domain_ip,
            home_directory: `/home/${primary_domain}/public_html`,
            last_login_ip: '192.168.1.1',
        };
        side_card_data = Object.assign({}, side_card_data, primary_website_data_);
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
                           onKeyUp={(e) => this.handleFilterCategories(e.target.value)}
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

Home.propTypes = {
    sessionVariables: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    website_list_data: PropTypes.object.isRequired,
    primary_website_data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    function retrieveUrlData(url_var_name) {
        let url = sessionVariables[url_var_name] || '';
        return getUrlData(url, dataByUrl);
    }

    const {sessionVariables, dataByUrl} = state;
    const website_list_data = retrieveUrlData('website_list_url', dataByUrl);
    const primary_website_data = retrieveUrlData('primary_website_url', dataByUrl);

    return {
        sessionVariables,
        website_list_data,
        primary_website_data
    }
}

export default connect(mapStateToProps)(withRouter(Home))
