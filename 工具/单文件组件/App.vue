<template>
    <div>
        <headered-section :level="1" :header="msg">
            <TabPage name="列表">
                <div pageName="first">1</div>
                <div pageName="second">2</div>
                <div pageName="thrid">3</div>
            </TabPage>
            <headered-section header="标题2">
              2 - 内容
                <headered-section header="标题3">
                    123
                    <headered-section header="标题4">
                        12390
                    </headered-section>
                </headered-section>
            </headered-section>
        </headered-section>
    </div>
</template>

<script>
import TabPage from "./component/TabPage.vue";
import HeaderedSection from "./component/HeaderedSection.vue";

export default {
    data(){
        return {
            msg: "Hello world"
        }
    },
    components: {
        TabPage,
        HeaderedSection
    }
}
</script>

<style scoped>
    h1{
        font-family: 'Times New Roman', Times, serif;
    }
</style>
