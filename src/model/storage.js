export const storage = {
	setItem: (name, item) => {
		if (String(name) && item) {
			localStorage.setItem(name, JSON.stringify(item));
		} else {
			return console.error(`Cannot set item ${item} with a name ${name}`);
		}
	},
	getItem: (name) => {
		if (String(name)) {
			const item = localStorage.getItem(name);

			if (item) {
				return JSON.parse(item);
			}
		} else {
			return console.error(`Cannot get item with a name ${name}`);
		}
	},
};
