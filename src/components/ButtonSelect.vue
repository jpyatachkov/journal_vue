<template>
    <button :class="{btn: true, 'btn-outline-success': !selected, 'btn-success': selected}" 
     @click="$emit('clicked')" >
        {{ text }} 
    </button>
</template>

<script>

export default {
    name: 'ButtonSelect',
    props: {
        text: String,
        selected: Boolean
    },

}

</script>

<style scoped>
    button {
        width: 50%;
    }
</style>
