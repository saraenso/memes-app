class API {
    constructor() {
        this.baseURL = 'https://api.imgflip.com/get_memes';
    }

    fetchMemes() {
        return fetch(this.baseURL)
            .then(response => response.json());
    }
}