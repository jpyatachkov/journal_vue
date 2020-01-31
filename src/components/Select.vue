<template>
    <select class="form-control" @change="sendOption()">
        <option v-for="item in options" :key="item">
            {{ item }}
        </option>
    </select>
</template>

<script>
export default {
    name: "Select",
    props: {
        options: Array
    },
    methods: {
        sendOption: () => {
            return true
      }
    }
}
</script>