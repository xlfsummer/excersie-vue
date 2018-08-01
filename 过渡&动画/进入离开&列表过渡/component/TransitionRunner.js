export default {
    data() {
        return {
            toggle: true
        };
    },
    template: `
        <section>
            <button @click="toggle = !toggle">切换</button><br/>
            <transition v-bind="$attrs" v-on="$listeners">
                <div class="content-block"
                v-show="toggle">contnet</div>
            </transition>
        </section>
    `
};