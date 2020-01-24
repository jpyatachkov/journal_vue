<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" v-for="item in headers" :key="item">
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
    name: 'Table',
    props: {
        headers: Array
    }
}
</script>