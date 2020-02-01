<template>
    <select class="form-control" @change="$emit('change', $event.target.value)">
        <option v-for="(item,index) in options" :key="item" :value="index">
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
    model: {
        prop: 'value',
        event: 'change'
    }
}
</script>
