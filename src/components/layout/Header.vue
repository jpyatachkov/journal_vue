<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style="margin-bottom:2rem" >
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/index" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/signup" class="nav-link">Sign Up</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/attendance_today" class="nav-link">Attendance</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    a {
        padding-right: 5px;
    }
</style>