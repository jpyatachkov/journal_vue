<template>
    <tr>
        <th scope="row">{{ number }}</th>
        <td>{{ name }}</td>
        <td :id="name+'_'+index"
            v-for="(item, index) in attendance" :key="item" :class="{checked: item}"></td>
    </tr>
</template>

<script>
export default {
    name: 'TableRowStatic',
    props: {
        name: String,
        columnSpan: Number,
        number: Number,
        attendance: Array // array of bool, true - checked, false - not.
    },
}
</script>

<style scoped>
    .checked {
        background-color: rgb(14, 149, 20);
    }
</style>
