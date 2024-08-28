/**
 * Configuration options for ID generation.
 */
interface Options {
	/**
	 * A string to prepend to the ID. Default is an empty string.
	 */
	prefix?: string;

	/**
	 * A string to append to the ID. Default is an empty string.
	 */
	suffix?: string;

	/**
	 * Whether to include the current timestamp in the ID. Default is true.
	 */
	timeStamp?: boolean;

	/**
	 * The length of the random alphanumeric string. Default is 13.
	 */
	length?: number;

	/**
	 * The separator to use between parts of the ID. Default is a period (".").
	 */
	separator?: string;
	/**
	 * Specifies the case for the random alphanumeric string. Default is 'upper'.
	 */
	caseOption?: "upper" | "lower";
}

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
 * @param {string} [options.caseOption="upper" || "lower"] - Specifies the case for the random alphanumeric string. Default is 'upper'.
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

// Main function to generate ID
export const generateID = (options?: Options): string => {
	// destructure the options
	const {
		prefix = "",
		suffix = "",
		timeStamp = true,
		length = 13,
		separator = ".",
		caseOption = "upper",
	} = options || {};

	// generate timestamp
	const date: number | string = timeStamp ? Date.now() : "";

	// Generate a random string of alphanumeric characters
	let randomString: string = Array.from({ length }, () =>
		Math.random().toString(36).slice(2, 3)
	).join("");

	// check case option
	if (caseOption === "upper") {
		randomString = randomString.toUpperCase();
	} else if (caseOption === "lower") {
		randomString = randomString.toLowerCase();
	}

	// return the ID with the options (if there is any)
	return [
		prefix && prefix.trim(),
		date,
		randomString,
		suffix && suffix.trim(),
	]
		.filter(Boolean)
		.join(separator);
};
