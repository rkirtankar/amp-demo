export function process(request: string): any {
    if (request === 'SUBSCRIBE_BOOK_1') {
        return response(books[0], "success");
    }

    if (request === 'SUBSCRIBE_BOOK_2') {
        return response(books[1], "success");
    }

    if (request === 'SUBSCRIBE_BOOK_3') {
        return response(books[2], "success");
    }

    if (request === 'ALREADY_SUBSCRIBED') {
        return error('Book already subscribed.');
    }

    if (request === 'INVALID_SUBSCRIPTION') {
        return error('Invalid subscription');
    }

    if (request === 'INVALID_BOOK') {
        return error('Book does not exist');
    }

    return error('Invalid request.');
}

export const books = [
    {title: "Harry Potter and the Philosophers Stone", author: 'JK Rowling'},
    {title: "Harry Potter and the Chamber of Secrets", author: 'JK Rowling'},
    {title: "Harry Potter and the Prisoner of Azkaban", author: 'JK Rowling'}
];

const response = function(book: {title: string, author: string}, subscription: string) {
    return {status: 200, response: {'book': book, subscription: subscription}};
};

const error = function(err: string) {
    return {status: 400, response: {'error': err}};
}

