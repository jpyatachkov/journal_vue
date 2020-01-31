<template>
    <div class="container align-center">
        <div class="container" style="width:60%; margin-bottom:1rem; margin-top: 1rem;">
            <button-select text="Week" @clicked="switchDisplayMode" :selected="displayWeek" />
            <button-select text="Subject" @clicked="switchDisplayMode" :selected="!displayWeek" />
        </div>
        <Select :options="dateOptions" id="1" v-if="displayWeek"/>
        <Select :options="subjectOptions" id="2" v-else />
        <Table :headers="tableHeaders">
            <table-row-static v-for="(item, index) in tableData" :key="index"
             :number="index+1" :attendance="item" :name="names[index]"/>
        </Table>
    </div>
</template>

<script>
import Select from '../components/Select'
import Table from '../components/Table'
import TableRowStatic from '../components/TableRowStatic'
import ButtonSelect from '../components/ButtonSelect'

export default {
    name: 'AttendanceTotal',
    components: {
        Select,
        Table,
        TableRowStatic,
        ButtonSelect
    },
    data: () => {
        return {
            dateOptions: [ "09.02 - 15.02 (Week 1)", "16.02 - 22.02 (Week 2)", "23.02 - 29.02 (Week 3)"],
            subjectOptions: ["ЯИП", "ТВиМС", "Электротехника"],
            tableHeaders: ["header1", "header2", "header3"],
            names: ["Abaturo", "Marmeladik", "Julo"],
            tableData: [[true, true, false], [true,true,true], [false,false,false]],
            displayWeek: true
        }
    },
    methods: {
        switchDisplayMode: function() {
           this.displayWeek = !this.displayWeek;
        }
    }
}
</script>

<style scoped>

</style>
