import { process } from './process';

export const action = (req) => {
    console.log("Received action request: " + req.path);
    console.log("Received params: " + JSON.stringify(req.body));

    const resp = process(req.body['request']);

    return response(resp.response, resp.status);
};

const response = (response: any, status: number = 200) => {
    return {"status": status, "response": response};
}