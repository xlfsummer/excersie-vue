export default class Route {
    constructor() {
        this.href = "";
        this.pathname = "";
        this.search = "";
        this.hash = "";
    }
    /** @param {Location} location */
    assign(location) {
        this.href = location.href;
        this.hash = location.hash;
        this.pathname = location.pathname;
        this.search = location.search;
    }
}