const url = "http://localhost:3000";

export async function login(user) {
	try {
		const res = await fetch(`${url}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function register(user) {
	try {
		const res = await fetch(`${url}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}