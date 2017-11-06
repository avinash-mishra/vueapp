<template>
  <div id="app" class="container">
      <input type="text" v-model="search" class="form-control" placeholder="Filter users by name or age">
      <table class="table table-striped">
          <thead>
              <tr>
                  <th v-for="column in columns" :key="column.key">
                      <a href="#" v-on:click="sortBy(column)" v-bind:class="{active: sortKey == column}">
                          {{column | capitalize}}
                      </a>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr  v-for="user in users" :key="user.key">
                  <td>{{name}}</td>
                  <td>{{age}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => ({
      sortKey: 'name',
      reverse: false,
      search: '',
      columns: ['name', 'age'],
      newuser: {},
      users: [
          { name: 'John', age: 50 },
          { name: 'Jane', age: 22 },
          { name: 'Paul', age: 34 },
          { name: 'Kate', age: 15 },
          { name: 'Amanda', age: 65 },
          { name: 'Steve', age: 38 },
          { name: 'Keith', age: 21 },
          { name: 'Don', age: 50 },
          { name: 'Susan', age: 21 }
      ]
  }),

  methods: {
    sortBy(sortKey) {
      this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;
      this.sortKey = sortKey;
    },

  }
}
</script>
<style scoped>
body {
    margin: 2em 0;
}
a {
    font-weight: normal;
    color: blue;
}
a.active {
    font-weight: bold;
    color: black;
}
</style>
