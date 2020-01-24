<template>
  <div class="container">
    <Table :subjects="studySubjects">
        <table-row-editable v-for="(member, index) in group" :key="index"
        :name="member.name" :number="index+1" :column-span="subjectsCount"/>
    </Table>
    <form @submit="sendData" style="margin-top:1rem">
      <input type="submit" value="Submit" class="btn btn-outline-success">
    </form>
  </div>
</template>

<script>
import TableRowEditable from './TableRowEditable'
import Table from './Table'

export default {
    name: 'List',
    props: {
      date: String
    },
    components: {
      TableRowEditable,
      Table
    },
    data: () => {
      return {
        group: [
          {
            name: 'Abatur'
          },
          {
            name: 'GapVlad'
          },
          {
            name: 'Hello World'
          },
          { name: 'Julo' },
          { name: 'Hdyady' }
        ],
        studySubjects: ['ЯИП', 'ТВиМС', 'Физика', 'Физра']
      }
    },
    computed: {
      subjectsCount() {
        return this.studySubjects.length
      }
    },
    methods: {
      fetchGroupMembers() {

      },

      fetchDateActivities() {

      },
      sendData() {

      }
    }
}
</script>