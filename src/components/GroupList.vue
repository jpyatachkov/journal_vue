<template>
  <div class="container">
    <GroupListTable :classes="classes">
        <GroupListItem v-for="(member, index) in group" :key="index"
        :name="member['name']" :number="++index" :column-span="classes.length"/>
    </GroupListTable>
  </div>
</template>

<script>
import GroupListItem from './GroupListItem'
import GroupListTable from './GroupListTable'

export default {
    name: 'GroupList',
    props: ['date'],
    components: {
      GroupListItem,
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
        classes: ['ЯИП', 'ТВиМС', 'Физика', 'Физра']
      }
    },
    methods: {
      fetchGroupMembers() {

      },

      fetchDateActivities() {

      }
    }
}
</script>