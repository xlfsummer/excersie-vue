<template>
    <section>
        <h2>介绍</h2>
        <div class="about-panel">
            <!-- <router-view></router-view> -->
            <router-view name="main"></router-view>
            <router-view name="right"></router-view>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
    .about-panel{
        display: grid;
        grid-template:
            "main" "right"   auto
            /1fr    200px;
        grid-gap: 20px;
    }
</style>
