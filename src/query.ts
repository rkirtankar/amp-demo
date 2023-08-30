export const query = (req) => {
    console.log("Received query: " + req.path);

    if (req.query['request'] === 'VALID_QUERY_REQUEST_PARAM') {
        return response({'items': 
            [
                {'request': 'SUBSCRIBE_BOOK_1', 'title': 'Harry Potter and the Philosophers Stone'},
                {'request': 'SUBSCRIBE_BOOK_2', 'title': 'Harry Potter and the Chamber of Secrets'},
                {'request': 'SUBSCRIBE_BOOK_3', 'title': 'Harry Potter and the Prisoner of Azkaban'}
            ]});
    }

    return response({'response': {'message': 'Invalid request'}}, 400);
};

const response = (response: any, status: number = 200) => {
    return {"status": status, "response": response};
}
