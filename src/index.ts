const functions = require('@google-cloud/functions-framework');
import { router } from './router';

const handle = functions.http('handler', (req, res) => {
    if (req.path.length > 1) {
        const route = req.path.substring(4, req.path.indexOf('/v1/', 1) == -1 ? req.path.length : req.path.indexOf('/v1/', 1));
        if (router.hasOwnProperty(route)) {
            const r = router[route](req);
            sendResponse(req, res, r.response, r.status);
            return;
        }
    }

    sendResponse(req, res, "Bad request", 400);
});

const sendResponse = (req, res, response, status = 200) => {
    res.setHeader("Access-Control-Allow-Origin", req.get('Origin') || req.get("AMP-Email-Sender") || "*");
    res.setHeader("AMP-Access-Control-Allow-Source-Origin", req.query["__amp_source_origin"] || "*");
    res.setHeader("AMP-Email-Allow-Sender", req.get("AMP-Email-Sender") || "*");
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin,AMP-Email-Allow-Sender");

    res.status(status).send(response);
};

