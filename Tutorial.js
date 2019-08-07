class Tutorial{
    constructor() {
        this.steps = [];
        this.currentStep = 0;
        this.lastStep = 0;
        this.btnNext = document.createElement("button");
        this.btnPrevious = document.createElement("button");
        this.btnConclude = document.createElement("button");
        this.configureBtnNext();
        this.configureBtnPrevious();
        this.configureBtnConclude();
    }


    init() {
        this.showStep();
        this.setBackDark();
    }

    showStep() {
        this.checkBOT();
        this.checkEOT();
        if (this.currentStep != this.lastStep) {
            this.removeDivMain();
            this.unhighlightObject();
        }
        this.highlightObject();
        this.setDivMain();
    }

    nextStep() {
        this.lastStep = this.currentStep;
        this.currentStep++;
        if (this.currentStep < this.steps.length) {
            this.showStep();
        } else {
            this.currentStep = this.steps.length - 1;
            this.lastStep = this.currentStep - 1;
        }
    }

    previousStep() {
        this.lastStep = this.currentStep;
        this.currentStep--;
        if (this.currentStep >= 0) {
            this.showStep();
        } else {
            this.currentStep = 0;
            this.lastStep = 1;
        }
    }

    add(o) {
        this.steps[this.steps.length] = o;
    }

    setDivMain() {
        this.configureDivMain();
        this.div.appendChild(this.buildTitleDiv());
        this.div.appendChild(this.buildBodyDiv());
        this.div.appendChild(this.buildFooterDiv());
        document.querySelector("html").appendChild(this.div);
    }

    setBackDark() {
        let darkDiv = document.createElement("div");
        darkDiv.setAttribute("id", "tutorialDarkDiv");
        darkDiv.style.position = "absolute";
        darkDiv.style.top = "0";
        darkDiv.style.left = "0";
        darkDiv.style.width = "100%";
        darkDiv.style.height = "100%";
        darkDiv.style.backgroundColor = "#000";
        darkDiv.style.opacity = "0.4";
        darkDiv.style.filter = "alpha(opacity=60)";
        darkDiv.style.zIndex = "5";
        darkDiv.style.display = "block";
        document.querySelector("body").appendChild(darkDiv);
    }

    removeDivMain() {
        let elem = document.querySelector("#tutorialStep");
        document.querySelector("html").removeChild(elem);
    }

    removeBackDiv() {
        let elem = document.querySelector("#tutorialDarkDiv");
        document.querySelector("body").removeChild(elem);
    }

    configureDivMain() {
        this.div = document.createElement("div");
        let elem = document.querySelector("#" + this.steps[this.currentStep].id);
        this.div.style.position = "absolute";
        this.div.style.zIndex = "15";
        this.div.style.width = "15%"
        this.div.style.top = elem.getBoundingClientRect().y / 2 + "px";
        this.div.style.left = elem.getBoundingClientRect().x + elem.getBoundingClientRect().width + "px";
        this.div.style.backgroundColor = "#fff";
        this.div.style.borderRadius = "25px";
        this.div.style.border = "2px solid blue";
        this.div.style.padding = "10px";
        this.div.setAttribute("id", "tutorialStep");
    }

    buildTitleDiv() {
        let divTitle = document.createElement("DIV");
        divTitle.appendChild(document.createTextNode("Passo " + (this.currentStep + 1) + " de " + this.steps.length));
        divTitle.style.textAlign = "center";
        divTitle.style.fontSize = "30px";
        divTitle.style.borderBottom = "2px solid grey";
        return divTitle;
    }

    buildBodyDiv() {
        let divBody = document.createElement("DIV");
        divBody.appendChild(document.createTextNode(this.steps[this.currentStep].text));
        divBody.style.textAlign = "justify";
        divBody.style.padding = "5px";
        divBody.style.borderBottom = "2px solid grey";
        return divBody;
    }

    buildFooterDiv() {
        let divFooter = document.createElement("DIV");
        divFooter.appendChild(this.btnPrevious);
        divFooter.appendChild(this.btnNext);
        divFooter.appendChild(this.btnConclude);
        divFooter.style.paddingLeft = "10px";
        divFooter.style.paddingRight = "10px";
        divFooter.style.marginTop = "5px";
        return divFooter;
    }

    configureBtnNext() {
        this.btnNext.addEventListener("click", () => {
            this.nextStep();
        });
        this.btnNext.className = "btn btn-primary pull-right";
        this.btnNext.innerHTML = "Próximo";
    }

    configureBtnPrevious() {
        this.btnPrevious.addEventListener("click", () => {
            this.previousStep();
        });
        this.btnPrevious.className = "btn btn-primary pull-left";
        this.btnPrevious.innerHTML = "Anterior";
    }

    configureBtnConclude() {
        this.btnConclude.addEventListener("click", () => {
            this.lastStep = this.currentStep;
            this.removeDivMain();
            this.removeBackDiv();
            this.unhighlightObject();
            this.currentStep = 0;
            this.lastStep = 0;
        });
        this.btnConclude.className = "btn btn-primary pull-right";
        this.btnConclude.innerHTML = "Finalizar";
    }

    highlightObject() {
        let elem = document.querySelector("#" + this.steps[this.currentStep].id);
        elem.style.boxShadow = "0 0 10px 5px " + this.steps[this.currentStep].color;
        elem.style.position = "relative";
        elem.style.zIndex = "10";
    }

    unhighlightObject() {
        let elem = document.querySelector("#" + this.steps[this.lastStep].id);
        elem.style.boxShadow = "";
        elem.style.position = "";
        elem.style.zIndex = "";
    }

    checkEOT() {
        if (this.currentStep == this.steps.length - 1) {
            this.btnNext.style.display = "none";
            this.btnConclude.style.display = "";
        } else {
            this.btnNext.style.display = "";
            this.btnConclude.style.display = "none";
        }
    }

    checkBOT() {
        if (this.currentStep == 0) {
            this.btnPrevious.style.display = "none";
        } else {
            this.btnPrevious.style.display = "";
        }
    }
}

//Limites da tela
//Botão de fechar