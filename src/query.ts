export const query = (req) => {
    console.log("Received query: " + req.path);

    if (req.path === '/query/1') {
        return response("active", "/action/1");
    }

    if (req.path === '/query/2') {
        return response("dismissed", "/action/2");
    }

    if (req.path === '/query/3') {
        return response("expired", "/action/3");
    }

    return response("expired", "/action/4");
};

const response = (status: string, url: string) => {
    return {"status": status, "url": url};
}
