<template>
    <div class="container">
        <form @submit="signIn" class="form-signin">
            <label class="form-label">Login</label>
            <input type="text" class="form-control" required/>
            <label class="form-label">Password</label>
            <input type="password" class="form-control" required/><br>
            <input type="submit" class="btn btn-primary">   
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm',
    methods: {
        signIn() {
            //validate
            //send request
            //redirect if success
            console.log("hello")
            this.$router.push('index')
        }
    }

}
</script>