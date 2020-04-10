import React, {Component} from "react";

export default class FormFeedback extends Component {
    render() {
        let message_variant = this.props.message_variant;
        let message_text = this.props.message_text;
        return (
            <div className={`alert alert-${message_variant}`} role="alert">
                {message_text}
            </div>
        )
    }
}