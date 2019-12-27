<template>
    <div class="container">
        <form @submit="signUp" class="form-signin">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" required/>
            <label class="form-label">Surname</label>
            <input type="text" class="form-control" required/>
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
    name: 'SignUpForm',
    methods: {
        signUp() {

        }
    }
}
</script>