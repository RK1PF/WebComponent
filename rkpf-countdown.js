class RkpfCountdown extends HTMLElement {
    constructor() {
        super();
        // DOM
        this._btnStart = null;
        this._purposeDom = null;
        // DATA
        this._duration = 0;
        this._timer = 0;
        this._purpose = "Compte à rebours";
    }

    connectedCallback() {
        console.log('Countdown chargé');
        this.innerHTML = `
        <style>
        
        .frame{
            padding: 1em;
            margin: 0 auto;
            display: block;
        }
        #purpose{
            font-size: 2em;
            font-style: italic;
        }
        #btnStart{
            width: 100%;
            display: block;
            padding: 1em;
        }
        </style>
        <div class="frame">
        <button id="btnStart">Start</button>
            <h2 id="purpose"></h2>
        </div>
        `;
        this._btnStart = document.querySelector('#btnStart');
        this._purposeDom = document.querySelector('#purpose');
        this._purposeDom.innerHTML = this._timer;
        this._btnStart.addEventListener('click', Event => {
            console.log('click');
            this.startCountdown();
        });
    }
    
    static get observedAttributes() {
        return ['duration', 'purpose'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'duration') {
            this._duration = parseInt(newValue);
            this._timer = this._duration;
        }
        
        if (name === 'purpose') {
            this._purpose = newValue;
        }
    }
    startCountdown() {
        this._handle = setInterval(() => {
            // affichage dans le Dom
            this._purposeDom.innerHTML = this._timer;
            
            this._timer = this._timer - 1;
            if (this._timer === 0) {
                clearInterval(this._handle);
            }
        }, 1000);
    }

}
// Définition du custom element
window.customElements.define('rkpf-countdown', RkpfCountdown);