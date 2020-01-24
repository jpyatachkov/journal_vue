<template>
    <div class="container">
        <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
            <ul class="navbar-nav nav-fill w-100">
                <li class="nav-item">
                    <router-link to="/index" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/attendance_today" class="nav-link">Today</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/attendance_total" class="nav-link">Total</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    nav {
        font-size:14px;
    }
</style>