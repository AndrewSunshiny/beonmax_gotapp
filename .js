class GotService {
	async getResource(url) {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}
	getAllcharacters() {
		return this.getResource(`https://anapioficeandfire.com/api/characters?page=5`);
	}
}
