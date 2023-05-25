const functions = require('@google-cloud/functions-framework');
const escapeHtml = require('escape-html');

functions.http('ampList', (req, res) => {
    const r = {};

    r.items = [];

    r.items.push({"name": "Rohit", "url": "https://rkirtankar.github.io"});
    r.items.push({"name": "Rohit 1", "url": "https://rkirtankar.github.io"});
    r.items.push({"name": "Rohit 2", "url": "https://rkirtankar.github.io"});

    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");

    res.send(JSON.stringify(r));
});