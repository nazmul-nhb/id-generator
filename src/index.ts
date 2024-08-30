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
	 *
	 */
	length?: number;

	/**
	 * The separator to use between parts of the ID. Default is a period (".").
	 */
	separator?: string;

	/**
	 * Specifies the case for the random alphanumeric string.
	 */
	caseOption?: "upper" | "lower";
}

/**
 * Generates a unique ID string composed of an optional prefix, suffix, a timestamp, and a random alphanumeric string, separated by a customizable separator.
 *
 * @param {Options} [options] - Configuration options for ID generation.
 *
 * // Options Properties:
 * @property {string} [prefix] - A string to prepend to the ID. Default is an empty string.
 * @property {string} [suffix] - A string to append to the ID. Default is an empty string.
 * @property {boolean} [timeStamp] - Whether to include the current timestamp in the ID. Default is true.
 * @property {number} [length] - The length of the random alphanumeric string. Default is 13.
 * @property {string} [separator] - The separator to use between parts of the ID. Default is a period (".").
 * @property {"upper" | "lower"} [caseOption] - Specifies the case for the generated ID.
 *
 * @returns {string} The generated ID string composed of the prefix, timestamp, random alphanumeric string, and suffix, separated by the specified separator.
 *
 * @example
 * // Generate an ID with all default options
 * const id = generateID();
 * // Example output: "1725026144072.8rp09zp5ewa4z"
 *
 * @example
 * // Generate an ID with a custom prefix and separator
 * const id = generateID({ prefix: 'ID', separator: '-' });
 * // Example output: "ID-1725026185691-128g0f6vdhyh5"
 *
 * @example
 * // Generate an ID without a timestamp
 * const id = generateID({ timeStamp: false });
 * // Example output: "1xq66nqnlplu9"
 *
 * @example
 * // Generate an ID with a custom length for the random string
 * const id = generateID({ length: 8 });
 * // Example output: "1725026316314.fkdwry5e"
 *
 * @example
 * // Generate an ID with a custom suffix
 * const id = generateID({ suffix: 'END' });
 * // Example output: "1725026349832.cl3j5he8k8sih.END"
 *
 * @example
 * // Generate an ID with a uppercase random string
 * const id = generateID({ caseOption: "upper" });
 * // Example output: "1725026408246.33BN8WNK9VZ4Y"
 *
 * @example
 * // Generate an ID with all options customized
 * const id = generateID({
 *   prefix: 'ID',
 *   suffix: 'END',
 *   timeStamp: true,
 *   length: 10,
 *   separator: '-',
 *   caseOption: "upper"
 * });
 * // Example output: "ID-1725026458372-UIH1JU9NT1-END"
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
		caseOption = "",
	} = options || {};

	// ! Not Using Currently: Ensure the length is at least 8
	// const validatedLength = length < 8 ? 8 : length;

	// generate timestamp
	const date: number | string = timeStamp ? Date.now() : "";

	// Generate a random string of alphanumeric characters
	const randomString: string = Array.from({ length }, () =>
		Math.random().toString(36).slice(2, 3)
	).join("");

	const ID: string = [
		prefix && prefix.trim(),
		date,
		randomString,
		suffix && suffix.trim(),
	]
		.filter(Boolean)
		.join(separator);

	// check case option for the generated ID
	// and return the ID with the options (if there is any)
	if (caseOption === "upper") {
		return ID.toUpperCase();
	} else if (caseOption === "lower") {
		return ID.toLowerCase();
	} else {
		return ID;
	}
};
