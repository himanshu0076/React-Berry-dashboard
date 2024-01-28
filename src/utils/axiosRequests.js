import { globalAction, dispatch } from 'store';
import axios from './axios';

function handleResponse(response) {
    console.log(response);
    if (response?.message) dispatch(globalAction('SHOW_TOASTER', { status: response.status, message: response.message }));

    // if (response?.type === 'validationError') {
    //     dispatch(globalAction('SHOW_TOASTER', { status: response.status, message: response.message }));
    // }

    return response;
}

export async function get(url, params) {
    const response = await axios.get(url, {
        params
    });

    return handleResponse(response);
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then((res) => {
                resolve(handleResponse(res.data));
            })
            .catch((err) => {
                reject(handleResponse(err));
            });
    });
}

export async function put(url, data) {
    const response = await axios.put(url, data);

    return handleResponse(response);
}

export async function patch(url, data) {
    const response = await axios.patch(url, data);

    return handleResponse(response);
}
