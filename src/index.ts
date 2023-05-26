const functions = require('@google-cloud/functions-framework');
import { router } from './router';

const handle = functions.http('handler', (req, res) => {
    if (req.path.length > 1) {
        const route = req.path.substring(1, req.path.indexOf('/', 1) == -1 ? req.path.length : req.path.indexOf('/', 1));
        if (router.hasOwnProperty(route)) {
            sendResponse(res, router[route](req));
            return;
        }
    }

    sendResponse(res, "Invalid path");
});

const sendResponse = (res, response, status = 200) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");

    res.status(status).send(response);
};

