<template>
    <section>
        <h2>404 - Page Not Found</h2>
        <p>page: <code>{{$route.query.from}}</code> not found</p>
        <br/>
        <button @click="$router.go(-1)">Back</button>
        <button @click="$router.push('/')">Home</button>
    </section>
</template>


<script>
export default {

}
</script>

<style>

</style>
