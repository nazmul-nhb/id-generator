"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = void 0;
/**
 * Generates a unique ID string composed of an optional prefix, suffix, a timestamp,
 * and a random alphanumeric string, separated by a customizable separator.
 *
 * @param {Object} [options] - Configuration options for ID generation.
 * @param {string} [options.prefix] - A string to prepend to the ID. Default is an empty string.
 * @param {string} [options.suffix] - A string to append to the ID. Default is an empty string.
 * @param {boolean} [options.timeStamp=true] - Whether to include the current timestamp in the ID. Default is true.
 * @param {number} [options.length=13] - The length of the random alphanumeric string. Default is 13.
 * @param {string} [options.separator='.'] - The separator to use between parts of the ID. Default is a period ("`.`").
 * @returns {string} The generated ID.
 *
 * @example
 * // Generate an ID with all default options
 * const id = generateID();
 * // Example output: "1693219475394.ABCDEFGHIJKL"
 *
 * @example
 * // Generate an ID with a custom prefix and separator
 * const id = generateID({ prefix: 'ID', separator: '-' });
 * // Example output: "ID-1693219475394-ABCDEFGHIJKL"
 *
 * @example
 * // Generate an ID without a timestamp
 * const id = generateID({ timeStamp: false });
 * // Example output: "ABCDEFGHIJKL"
 *
 * @example
 * // Generate an ID with a custom length for the random string
 * const id = generateID({ length: 8 });
 * // Example output: "1693219475394.ABCDEFGH"
 *
 * @example
 * // Generate an ID with a custom suffix
 * const id = generateID({ suffix: 'END' });
 * // Example output: "1693219475394.ABCDEFGHIJKLEND"
 */
const generateID = (options) => {
    const { prefix = "", suffix = "", timeStamp = true, length = 13, separator = ".", } = options || {};
    const date = timeStamp ? Date.now() : "";
    // Generate a random string of alphanumeric characters
    const randomString = Array.from({ length }, () => Math.random().toString(36).slice(2, 3))
        .join("")
        .toUpperCase();
    return [prefix, date, randomString, suffix].filter(Boolean).join(separator);
};
exports.generateID = generateID;
