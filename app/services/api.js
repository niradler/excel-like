import axios from 'axios';

const host_url = "https://excel-like.herokuapp.com";

const _send = (method, route, data) => {
    const opts = {
        method: method,
        url: host_url + route,
    };

    if(method.toUpperCase() === 'POST') {
        opts.data = data;
    }

    return axios(opts);
}

const getSheet = () =>{

    return _send("GET", "/api/sheet/get");
}

const saveSheet = (data) =>{

    return _send("POST", "/api/sheet/save", data);
}

const addRow = (data) =>{

    return _send("POST", "/api/sheet/add", {});
}

export default {
    getSheet,
    saveSheet,
    addRow
}