<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" v-for="item in subjects" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
          <slot></slot>
    </tbody>
    </table>
</template>
<script>
export default {
    name: 'GroupListTable',
    props: {
        subjects: Array
    }
}
</script>