export default {
    data() {
        return {
            pages: [],
            currentPageName: "",
            vm: null,
        };
    },
    provide() {
        return {
            addPage: (name, el) => {
                if (!name) throw new Error("name invalid");
                if (this.currentPageName == "") {
                    this.currentPageName = name;
                } else {
                    el.style.display = "none";
                }
                this.pages[name] = el;
                this.$refs.containerEl.appendChild(el);

                let span = document.createElement("span");
                span.innerText = name;

                span.style.margin = "10px";
                span.style.cursor = "pointer";

                span.addEventListener("click", () => {
                    this._provided.switchPage(name);
                }, false);
                this.$refs.header.appendChild(span);
            },
            switchPage: (name) => {
                for (let pageName in this.pages) {
                    this.pages[pageName].style.display = pageName != name ?
                        "none" : "block";
                }
            }
        };

    },
    template: `
        <div>
            <div ref="header"></div>
            <div ref="containerEl">
                <slot style="display: none"></slot>
            </div>
        </div>
    `,
    created() {
        this.vm = this;
    }
};