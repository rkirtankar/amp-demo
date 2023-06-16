export const unpack = (req, res) => {
    const headers = {}

    for (let key in req.headers) {
        headers[key] = req.headers[key];
    }

    const query = {};
    for (let key in req.query) {
        query[key] = req.query[key];
    }

    // const ampHeader = req.get("AMP-Email-Sender");
    // console.log("AMP Header is: " + ampHeader);
    // console.log("All headers: " + JSON.stringify(headers));
    // console.log("All params: " + JSON.stringify(query));
    // console.log("Token param: " + req.query["token"]);

    return JSON.stringify({"headers": headers, "params": query});
};
