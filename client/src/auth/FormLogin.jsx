import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import NameLogo from "../media/name-logo.svg";
import Logo from "../media/logo.svg";
import {postAPIRequest} from "../functions/apiRequests";
import {serverBaseUrl, clientBaseUrl} from "../functions/baseUrls";
import {getCookie, extractResponseError, formDataToPayload} from "../functions/componentFunctions";
import FormFeedback from "../components/FormFeedback";
import $ from "jquery";

export default class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activity: false,
            message: false,
            message_text: null,
            message_variant: 'info'
        }
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        let login_url = serverBaseUrl() + '/verifyLogin';
        let formData = new FormData($("form#form-login")[0]);
        let payload = {languageSelection: "english"}
        payload = formDataToPayload(formData, payload);
        let csrftoken = getCookie('csrftoken');
        this.setState({
            message: true,
            message_text: "Authenticating...",
            message_variant: 'info',
            activity: true
        });
        postAPIRequest(
            login_url,
            () => {
                localStorage.username = payload['username'];
                localStorage.token = btoa(`${payload['username']}:${payload['password']}`);
                this.props.history.push(`${clientBaseUrl()}/`);
            },
            (results) => {
                let error_message = extractResponseError(results);
                this.setState({
                   message: true,
                   message_text: error_message,
                   message_variant: 'danger',
                    activity: false
                });
            },
            payload,
            {
                'X-CSRFToken': csrftoken
            }
        )
    }

    render() {
        let message = '';
        if (this.state.message) {
            message = <FormFeedback
                message_variant={this.state.message_variant}
                message_text={this.state.message_text}
            />
        }
        return (
            <div className="container-fluid bg-grey d-flex justify-content-center vh-100">
                <div className="col-md-4 mt-lg-5 d-flex flex-column">
                    {message}
                    <form className="mx-4" id="form-login"
                          onSubmit={(e) => this.handleSubmitLogin(e)}>
                        <div className="row col-md-12">
                            <div className="d-flex mx-auto mb-3 pt-5">
                                <img src={NameLogo} alt="" height="50"/>
                            </div>
                            <div className="form-group col-md-12 mt-2">
                                <label className="label">Username</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white login-input-prepend">
                                            <FontAwesomeIcon icon={faUser} color="#8fa7ad"/>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control form-control-sm login-text-input"
                                           name="username"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 mt-2">
                                <label className="label">Password</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white login-input-prepend">
                                            <FontAwesomeIcon icon={faLock} color="#8fa7ad"/>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control form-control-sm login-text-input"
                                           name="password"/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 mt-2">
                                <button type="submit" className="btn btn-blue btn-block btn-sm login-btn"
                                disabled={this.state.activity}>
                                    Log in
                                </button>
                            </div>
                            <div className="form-group col-md-12 mt-2 text-center">
                                <a href="#" className="reset-password-link text-decoration-none">Reset Password</a>
                            </div>
                        </div>
                    </form>
                    <div className="mt-auto copyright">
                        <div className="d-flex flex-column mx-auto mb-2">
                            <img src={Logo} alt="" height="16"/>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                Copyright&copy; 2020 Truehost Cloud
                            </div>
                        </div>
                        <span className="row">
                            <div className="col-md-12 text-center">
                            <a href="#" className="privacy-policy-link text-decoration-none">Privacy Policy</a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
