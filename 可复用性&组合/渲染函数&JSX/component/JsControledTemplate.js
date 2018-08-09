export default async _ => {
    let dataList = await (await fetch(
        "/可复用性&组合/渲染函数&JSX/data/surface.json"
    )).json();
    return {
        data() {
            return {
                list: dataList,
                selectedModels: ["Laptop", "Tablet"],
                selectedOps: ["Windows"]
            };
        },
        computed: {
            models() {
                return this.list.reduce(
                    (ret, data) =>
                        ret.includes(data.model) ? ret : [...ret, data.model],
                    []
                );
            },
            ops(){
                return this.list.reduce(
                    (ret, data) =>
                        ret.includes(data.op) ? ret : [...ret, data.op],
                    []
                );
            }
        },
        render(createElement) {
            var vm = this;
            return createElement("div", [
                createElement(
                    "p",
                    this.ops.map(op =>
                        createElement("label", {
                            style: {
                                marginRight: "5px"
                            }
                        }, [
                            createElement("input", {
                                attrs: {
                                    type: "checkbox",
                                    checked: this.selectedOps.includes(op)
                                },
                                on: {
                                    change: ()=>{
                                        this.selectedOps = this.selectedOps.includes(op)
                                            ? this.selectedOps.filter(m => m != op)
                                            : this.selectedOps.concat(op);
                                    }
                                }
                            }),
                            op
                        ])
                    )
                ),
                createElement(
                    "p",
                    this.models.map(model =>
                        createElement("label", {
                            style: {
                                marginRight: "5px"
                            }
                        },[
                            createElement("input", {
                                attrs: {
                                    type: "checkbox",
                                    checked: this.selectedModels.includes(model)
                                },
                                on: {
                                    change: ()=>{
                                        this.selectedModels = this.selectedModels.includes(model)
                                            ? this.selectedModels.filter(m => m != model)
                                            : this.selectedModels.concat(model);
                                    }
                                }
                            }),
                            model
                        ])
                    )
                ),
                createElement(
                    "ul",
                    this.list
                        .filter(data => this.selectedOps.includes(data.op))
                        .filter(data => this.selectedModels.includes(data.model))
                        .map(data => createElement("li", data.name))
                )
            ]);
        }
    };
};
