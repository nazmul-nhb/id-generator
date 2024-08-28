"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = void 0;
const generateID = () => {
    const date = Date.now();
    // generate a random string of 9 alphanumeric characters
    const randomString = Array.from({ length: 9 }, () => Math.random().toString(36).slice(2, 3))
        .join("")
        .toUpperCase();
    return `TT.${date}.${randomString}`;
};
exports.generateID = generateID;
