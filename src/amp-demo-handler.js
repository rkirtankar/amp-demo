const functions = require('@google-cloud/functions-framework');

functions.http('amp-demo-handler', (req, res) => {
    let headers = "";

    for (let key in req.headers) {
        headers += "::" + key + "=" + req.headers[key];
    }

    let query = "";
    for (let key in req.query) {
        query += "::" + key + "=" + req.headers[key];
    }

    let response = {"headers": headers, "params": query};

    const origin = req.headers["Origin"] || req.headers["AMP-Email-Sender"] || "*";
    const ampOrigin = req.query["__amp_source_origin"] || "*";
    const allowSender = req.headers["AMP-Email-Sender"] || "*";


    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("AMP-Access-Control-Allow-Source-Origin", ampOrigin);
    res.setHeader("AMP-Email-Allow-Sender", allowSender);
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin,AMP-Email-Allow-Sender");
    res.setHeader("Content-Type", "application/json");

    res.status(200).send(response);
});
