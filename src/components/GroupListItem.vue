<template>
    <tr>
        <th scope="row">{{number}}</th>
        <td>{{ name }}</td>
        <td v-for="i in parseInt(columnSpan)" :key="i" @click="toggleAttendance($event)">
            <input type="hidden" v-bind:id="name+'_'+i" value="false">
        </td>
    </tr>
</template>

<script>
export default {
    name: 'GroupListItem',
    props: ['name', 'columnSpan', 'number'],
    methods: {
        toggleAttendance(event) {
            let item = event.target, input = item.getElementsByTagName('input')[0];
            item.classList.toggle('checked');
            input.value == "false" ? input.value = "true" : input.value = "false";
        }
    }
}
</script>

<style scoped>
    .checked {
        background-color: rgb(14, 149, 20);
    }
</style>