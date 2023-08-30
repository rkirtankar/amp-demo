import { process } from './process';

export function multipleActions(req) {
    const requests: string[] = req.body['requests'];

    const res = requests.forEach(r => response(process(r)));
    
    return res;
}

const response = (response: any, status: number = 200) => {
    return {"status": status, "response": response};
}