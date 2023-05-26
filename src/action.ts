export const action = (req) => {
    console.log("Received action request: " + req.path);

    return "Success";
};