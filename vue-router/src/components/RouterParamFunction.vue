<template>
    <section>
        <h3>Function</h3>
        <p>{{$attrs}}</p>
        <p>id: {{id}}</p>
        <p>custom: {{custom}}</p>
    </section>
</template>

<script>
export default {
    props: {
        id: String,
        subid: String,
        custom: String,
    }
}
</script>

<style>

</style>
