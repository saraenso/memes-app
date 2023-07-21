class View {
    constructor({ onGenerateMeme }) {
        this.selectNode = document.querySelector('#select');
        this.inputAboveNode = document.querySelector('#input-above');
        this.inputBelowNode = document.querySelector('#input-below');
        this.errorAboveNode = document.querySelector('#error-above');
        this.errorBelowNode = document.querySelector('#error-below');

        this.onGenerateMeme = onGenerateMeme;
        this.previewImageNode = document.querySelector('#meme-image');
        this.textAboveNode = document.querySelector('#text-above');
        this.textBelowNode = document.querySelector('#text-below');

        this.selectNode.addEventListener('change', this.handleSelectChange);
        this.inputAboveNode.addEventListener('input', this.handleInputChange);
        this.inputBelowNode.addEventListener('input', this.handleInputChange);
    }

    renderMemes(memes) {
        this.selectNode.innerHTML = '';
        memes.forEach((meme, index) => {
            const option = document.createElement('option');
            option.value = meme.url;
            option.innerText = meme.name;
            this.selectNode.appendChild(option);

            if (index === 0) {
                this.updatePreviewImage(meme.url);
            }
        });
    }

    updatePreviewImage(url) {
        this.previewImageNode.src = url;
    }

    handleSelectChange = () => {
        const selectedMeme = this.selectNode.value;
        this.updatePreviewImage(selectedMeme);
    }

    handleInputChange = (event) => {
        const inputNode = event.target;
        const inputText = inputNode.value;
        const errorMessage = 'The text length cannot exceed the limit';

        if (inputText.length > 50) {
            this.showError(inputNode.id === 'input-above' ? this.errorAboveNode : this.errorBelowNode, errorMessage);
            inputNode.value = inputText.slice(0, 50);
        } else {
            this.showError(inputNode.id === 'input-above' ? this.errorAboveNode : this.errorBelowNode, '');
        }

        const aboveText = this.inputAboveNode.value;
        const belowText = this.inputBelowNode.value;

        this.updateCaptions(aboveText, belowText);
    }

    updateCaptions(aboveText, belowText) {
        this.textAboveNode.innerText = aboveText;
        this.textBelowNode.innerText = belowText;
    }

    showError(errorNode, message) {
        errorNode.innerText = message;
    }
}