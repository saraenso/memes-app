class Model {
    constructor({ onMemesChanged }) {
        this.memes = [];
        this.isError = false;
        this.onMemesChanged = onMemesChanged;
    }

    setMemes(memes) {
        this.memes = memes;
        this.onMemesChanged(this.memes, this.isError);
    }

    getMemes() {
        return this.memes;
    }

    addMeme(meme) {
        this.memes.push(meme);
        this.onMemesChanged(this.memes, this.isError);
    }

    setError(isError) {
        this.isError = isError;
        this.onMemesChanged(this.memes, this.isError);
    }
}
