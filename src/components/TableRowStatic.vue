<template>
    <tr>
        <th scope="row">{{ number }}</th>
        <td>{{ name }}</td>
        <td :id="name+'_'+i"
        v-for="i in columnSpan" :key="i" ></td>
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