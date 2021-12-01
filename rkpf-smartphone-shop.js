class RkpfSmatphoneShop extends HTMLElement {
    constructor() {
        super();
        // DOM
        this._root = this.attachShadow({ mode: "open" }); //récupère le shadow pour encapsuler son template

        // Datas
        this._smartphones = [
            {
                id: 1,
                brand: "Sumsang",
                model: "Galaxy S100",
                description: "lorem foix x12 de la hood",
            },
            {
                id: 2,
                brand: "Mangue",
                model: "Y20",
                description: "lorem foix voila comment la hood",
            },
            {
                id: 3,
                brand: "Fidelity",
                model: "Fiona",
                description: "lorem foix voila fiona la fidelity trois",
            },
        ];
    }
    connectedCallback() {
        console.log("lol");
        this._root.innerHTML = `
            <style>
                h1 , h2 {
                    color: blue;
                }
                .frame{
                    border-radius: 2rem;
                    box-shadow: 1rem 0rem 1rem rgba(0, 0, 0, 0.308);
                    padding: 1em;
                    margin-bottom: 2em;
                }
                #description{
                    font-style: italic;
                }
            </style>
          <template id="smartphone-template">
              <div class="frame">
                  <h2 id="brand"></h2>
                  <p id="model"></p>
                  <p id="description"></p>
              </div>
          </template>
          <div id="result"></div>
        `;
        this._templateContent = this._root.querySelector(
            "#smartphone-template"
        ).content;
        this._result = this._root.querySelector("#result");

        this._smartphones.map((smartphone) => {
            const clone = document.importNode(this._templateContent, true);
            // update du DOM avec les données du smartphone
            clone.querySelector("#brand").innerHTML = smartphone.brand;
            clone.querySelector("#model").innerHTML = smartphone.model;
            clone.querySelector("#description").innerHTML = smartphone.description;
            // ajout au DOM
            this._result.appendChild(clone);
        });
    }
}
// definition du custom element
window.customElements.define("rkpf-smartphone-shop", RkpfSmatphoneShop);
