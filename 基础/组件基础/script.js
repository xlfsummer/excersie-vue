// import Vue from "vue";
import Vue from "../../node_modules/vue/dist/vue.esm.browser.js";

Vue.component("button-counter", {
    data: () => ({
        count: 0
    }),
    template: "<button @click='count++'>you click {{count}} times.</button>",
});

Vue.component("list-container", {
    data: (function () {
        var data = [];
        return () => ({
            data,
            input: "",
        });
    })(),
    template: `
    <div>
    <ul>
        <li v-for="item in data">{{item}}</li>
    </ul></br>
    <input v-model="input" /></br>
    <button @click="input&&data.push(input)&&(input='')">push</button>
    <button @click="data.pop()">pull</button>
    </div>
    `
})

//局部组件
let articleDetail = {
    props: ["article"],
    template: `<article style="margin-bottom: 15px">
        <div>{{article.title}}</div>
        <div style="font-size:.8em;color:#666;">{{article.date}}</div>
    </article>`
};

Vue.component("article-list", {
    props: ["list"],
    template: `<div>
        <article-detail v-for="article in list" :article="article" />
    </div>`,
    components: {
        articleDetail,
    }
});

Vue.component("time-recorder", {
    data: () => ({
        record: ["init record"]
    }),
    template: `
    <div>
        <ul>
            <li v-for="r in record">{{r}}</li>
        </ul>
        <time-recorder-record-btn></time-recorder-record-btn>
        <time-recorder-clear-btn></time-recorder-clear-btn>
    </div>
    `,
    components: {
        "time-recorder-record-btn": {
            data: () => ({
                author: ""
            }),
            template: `
               <div><input placeholder="someone" v-model="author"/><button @click="$emit('timer-recorder-record', author)">record</button></div>
            `,
        },
        "time-recorder-clear-btn": {
            // template: `<button @click="$emit('timer-recorder-clear')">clear all</button>`
            template: `<button @click="$emit('cus')">clear all</button>`
        }
    }
})

debugger;
new Vue({
    el: "#app",
    data: {
        articleList: [
            { title: "时空连续论与场论的不一致性探究", date: "2017-03-01 12:21:12" },
            { title: "十万个大米先生", date: "2017-12-21 12:23:12" },
            { title: "今天的卫宫和他的猫", date: "2018-06-25 08:17:07" },
            { title: "博弈论中的 Visual Studio Code 与 Coca cola ", date: "8012-06-05 13:35:42" }
        ]
    }
});