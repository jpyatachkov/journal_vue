<template>
  <div class="container">
    <group-list-table :subjects="studySubjects">
        <group-list-table-item v-for="(member, index) in group" :key="index"
        :name="member.name" :number="index+1" :column-span="subjectsCount"/>
    </group-list-table>
    <form @submit="sendData" style="margin-top:1rem">
      <input type="submit" value="Submit" class="btn btn-outline-success">
    </form>
  </div>
</template>

<script>
import GroupListTableItem from './GroupListTableItem'
import GroupListTable from './GroupListTable'

export default {
    name: 'GroupList',
    props: {
      date: String
    },
    components: {
      GroupListTableItem,
      GroupListTable
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