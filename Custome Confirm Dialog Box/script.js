const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const confirmEl = document.querySelector('.confirm');
const closeEl = document.querySelector('.close');
const titleEl = document.querySelector('.title');
const contentEl = document.querySelector('.content');
const btnOk = document.querySelector('.btn-ok');
const btnCancel = document.querySelector('.btn-cancel');

class ConfirmDialog {
    constructor() {
        this.title = titleEl;
        this.content = contentEl;
        this.ok = btnOk;
        this.cancel = btnCancel;
    }

    trigger(title, content, okText, cancelText, callbackfn) {
        this.title.textContent = title;
        this.content.textContent = content;
        this.ok.innerText = okText;
        this.cancel.innerText = cancelText;

        confirmEl.classList.remove("close-model");

        closeEl.addEventListener("click", this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);

        this.ok.addEventListener("click", () => {
            callbackfn();
            this.closeModal();
        });
    }

    closeModal() {
        confirmEl.classList.add("close-model");
    }
}

// Btn event listeners
btn1.addEventListener("click", () => {
    changeBg("red");
});

btn2.addEventListener("click", () => {
    changeBg("purple");
});

const confirmDialog = new ConfirmDialog();

function changeBg(color) {
    confirmDialog.trigger(
        "Change Background",
        "You are about to change the background!",
        "Change",
        "Don't Change",
        setBg
    );

    function setBg() {
        document.body.style.backgroundColor = color;
    }
}