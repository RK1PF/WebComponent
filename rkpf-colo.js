class RKPF extends HTMLElement {
    constructor() {
        super();
        console.log('RKPF à l\'action');
        //DOM
        this._root = this.attachShadow({ mode: 'open' });
        
        // DATA
        this._blablas = [
            {
                id: 1,
                message: "Tu manges de la soupe?"
            },
            {
                id: 2,
                message: "Du magret de canard"
            },
            {
                id: 3,
                message: "Milo, Sao!? Bon sa!"
            },
            {
                id: 4,
                message: "Taioro Korori!"
            }
        ];

    }
    connectedCallback() {
        this._root.innerHTML = `
        <style>
        h1 , h2 {
            color: blue;
        }
        .frame{
            padding: 1em;
            margin: 0 auto;
        }
        #message{
            font-size: 2em;
            font-style: italic;
        }
        #message:hover{
            cursor: pointer;
        }
        </style>
        <template id="blabla-template">
        <div class="frame">
          <p id="message"></p>
        </div>
        </template>
        <div id="result"></div>
        `;
        // Définition du template
        this._templateContent = this._root.querySelector('#blabla-template').content;
        this.loadBlabla();
    }
    loadBlabla(){
        // Pick randomly
        this._ObjectToShow = this.getRandomElementInArray(this._blablas);
        
        this._result = this._root.querySelector("#result");

        const clone = document.importNode(this._templateContent, true);
        clone.querySelector('#message').innerHTML = this._ObjectToShow.message;
        this._result.appendChild(clone);
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    getRandomElementInArray(array) {
        const min = 1;
        const max = array.length;
        const rand = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        const result = array.find(({id}) => id == rand);
        console.log(result);
        return result;
    }

}
window.customElements.define('rkpf-colo', RKPF);