import fetch from 'cross-fetch';
import {getCookie} from "../functions/componentFunctions";

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SELECT_API_ENDPOINT = 'SELECT_API_ENDPOINT';
export const INVALIDATE_DATA = 'INVALIDATE_DATA';

export function setSessionVariable(var_name, var_value) {
    return {
        type: SELECT_API_ENDPOINT,
        var_value,
        var_name
    }
}

export function invalidateData(endpoint) {
    return {
        type: INVALIDATE_DATA,
        endpoint
    }
}

function requestData(endpoint) {
    return {
        type: REQUEST_DATA,
        endpoint
    }
}

function receiveData(endpoint, json) {
    return {
        type: RECEIVE_DATA,
        endpoint,
        items: json,
        receivedAt: Date.now()
    }
}

function fetchData(endpoint, method = 'GET', payload = {}) {
    return dispatch => {
        dispatch(requestData(endpoint));
        if (method === 'GET') {
            return fetch(endpoint, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.token
                }
            })
                .then(response => response.json())
                .then(json => dispatch(receiveData(endpoint, json)))
        } else {
            let csrftoken = getCookie('csrftoken');
            return fetch(endpoint, {
                credentials: 'include',
                method: method,
                body: JSON.stringify(payload),
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Authorization': 'Basic ' + localStorage.token
                },
            })
                .then(response => response.json())
                .then(json => dispatch(receiveData(endpoint, json)))
        }
    }
}

function shouldFetchData(state, endpoint) {
    const items = state.dataByUrl[endpoint];
    if (!items) {
        return true
    } else if (items.isFetching) {
        return false
    } else {
        return items.didInvalidate
    }
}

export function fetchDataIfNeeded(endpoint, method='GET', payload={}) {
    return (dispatch, getState) => {
        if (shouldFetchData(getState(), endpoint)) {
            return dispatch(fetchData(endpoint, method, payload))
        }
    }
}
