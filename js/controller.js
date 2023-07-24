class Controller {
    constructor() {
        this.api = new API();
        this.model = new Model({
            onMemesChanged: this.handleModelMemesChanged
        });

        this.view = new View({
            onGenerateMeme: this.handleViewGenerateMeme
        });

        this.init();
    }

    init() {
        this.api.fetchMemes()
            .then(memes => {
                this.model.setMemes(memes.data.memes);
            })
            .catch(error => {
                this.model.setError(true);
            });
    }

    handleModelMemesChanged = (memes, isError) => {
        this.view.renderMemes(memes);
        this.view.showError(this.view.errorAboveNode, isError);
        this.view.showError(this.view.errorBelowNode, isError);
    }

    handleViewGenerateMeme = (selectedMeme, aboveText, belowText) => {
        const meme = {
            image: selectedMeme.url,
            above: aboveText,
            below: belowText
        };
        this.model.addMeme(meme);
        this.model.setError(false);
    }
}