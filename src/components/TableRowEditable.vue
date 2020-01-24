<template>
    <tr>
        <th scope="row">{{number}}</th>
        <td>{{ name }}</td>
        <td :id="name+'_'+i" @click="toggleAttendance($event)"
        v-for="i in columnSpan" :key="i" ></td>
    </tr>
</template>

<script>
export default {
    name: 'TableRowEditable',
    props: {
        name: String,
        columnSpan: Number,
        number: Number
    },
    methods: {
        toggleAttendance(event) {
            event.target.classList.toggle('checked');
        }
    }
}
</script>

<style scoped>
    .checked {
        background-color: rgb(14, 149, 20);
    }
</style>