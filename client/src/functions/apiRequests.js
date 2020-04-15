module.exports = {
    postAPIRequest: function (url, successCallback, errorCallback, payload, headers, method = 'POST') {
        fetch(url, {
                credentials: 'include',
                method: method,
                body: JSON.stringify(payload),
                headers: headers,
            }
        ).then(function (response) {
            if (response.ok) {
                return response;
            }
            throw response;
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            let error_message = json['error_message'] || 'None';
            if (error_message === 'None') {
                successCallback(json);
            } else {
                errorCallback(json);
            }
        }).catch(error => {
            if (process.env.NODE_ENV === 'development' && error.status >= 500) {
                errorCallback(error.statusText);
            } else {
                try {
                    error.json().then((body) => {
                        errorCallback(body);
                    });
                } catch (e) {
                    errorCallback({});
                }
            }
        });
    },

    getAPIRequest: function (url, successCallback, errorCallback, headers) {
        fetch(url, {
                headers: headers,
                credentials: 'include'
            }
        ).then(function (response) {
            if (response.ok) {
                return response;
            }
            throw response;
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            successCallback(json);
        }).catch(error => {
            if (process.env.NODE_ENV === 'development' && error.status >= 500) {
                errorCallback(error.statusText);
            } else {
                try {
                    error.json().then((body) => {
                        errorCallback(body);
                    });
                } catch (e) {
                    errorCallback({});
                }
            }
        });
    }
};