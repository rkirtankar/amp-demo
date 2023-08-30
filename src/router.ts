import { query } from "./query";
import { action } from "./action";
import { unpack } from "./unpack";
import { multipleActions } from "./multipleactions";

export const router = {
    "query" : query,
    "processAction" : action,
    "processMultipleActions": multipleActions,
    "unpack" : unpack
};