module.exports = {
    getCookie: function (cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    extractResponseError(results) {
        let alert_message = '';
        if (results.constructor === Array && results.length > 0) {
            alert_message = results[0];
        } else if (typeof results === "object") {
            if (results['detail']) {
                alert_message = results.detail;
            } else if (results['non_field_errors']) {
                alert_message = results['non_field_errors'];
            } else if (results['error_message']) {
                alert_message = results.error_message;
            } else if (Object.keys(results).length > 0) {
                for (let key in results) {
                    alert_message += key + ': ' + results[key] + ' ';
                }
            } else {
                alert_message = results.toString();
            }
        } else if (typeof results === "string") {
            alert_message = results;
        }
        return alert_message;
    },
    formDataToPayload(formData, payload) {
        formData.forEach(function (value, key) {
            payload[key] = value;
        });
        return payload;
    },
}