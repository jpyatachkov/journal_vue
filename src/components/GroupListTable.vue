<template>
    <table class="table table-bordered" style="margin:0; padding: 0;">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" v-for="item in classes" :key="item">
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
    props: ['classes']
}
</script>