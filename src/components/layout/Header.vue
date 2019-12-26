<template>
    <div>
        <h1>Site title</h1>
        <div id="nav">
            <router-link to="/login">Login</router-link>
            <router-link to="/index">Home</router-link>
            <router-link to="/signup">Sign Up</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    router-link {
        margin-right: 1rem;
    }
</style>