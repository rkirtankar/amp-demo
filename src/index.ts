const functions = require('@google-cloud/functions-framework');
import { router } from './router';

const handle = functions.http('handler', (req, res) => {
    if (req.path.length > 1) {
        const route = req.path.substring(1, req.path.indexOf('/', 1) == -1 ? req.path.length : req.path.indexOf('/', 1));
        if (router.hasOwnProperty(route)) {
            sendResponse(req, res, router[route](req));
            return;
        }
    }

    sendResponse(req, res, "Invalid path");
});

const sendResponse = (req, res, response, status = 200) => {
    res.setHeader("Access-Control-Allow-Origin", req.headers['Origin'] || req.headers["AMP-Email-Sender"]);
    res.setHeader("AMP-Access-Control-Allow-Source-Origin", req.query["__amp_source_origin"]);
    res.setHeader("AMP-Email-Allow-Sender", req.headers["AMP-Email-Sender"]);
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin,AMP-Email-Allow-Sender");

    res.status(status).send(response);
};

