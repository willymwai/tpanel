import React, {Component} from 'react';

export default class ComponentLoadingIndicator extends Component {
    render() {
        return (
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="spinner-border text-dark-blue-1" style={{width: '5rem', height: '5rem'}} role="status">
                    <span className="sr-only">Processing...</span>
                </div>
            </div>
        )
    }
}