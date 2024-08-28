export const generateID = (): string => {
	const date: number = Date.now();

	// generate a random string of 9 alphanumeric characters
	const randomString: string = Array.from({ length: 9 }, () =>
		Math.random().toString(36).slice(2, 3)
	)
		.join("")
		.toUpperCase();

	return `TT.${date}.${randomString}`;
};
