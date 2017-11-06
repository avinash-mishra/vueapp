<template>
  <div id="app">
      <template>
          <el-table :data="tableData" :default-sort="{prop: 'date', order: 'descending'}" style="width: 100%">
              <el-table-column style="float: left; position: relative; left: 30px" prop="date" label="Date" sortable width="180">
              </el-table-column>
              <el-table-column prop="name" label="Name" width="180">
              </el-table-column>
              <el-table-column prop="address" label="Address" :formatter="formatter">
              </el-table-column>
          </el-table>
      </template>
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => ({
      tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
  }),
  methods: {
    formatter(row, column) {
      return row.address;
    }
  }
}
</script>
<style style="scss" scoped>
@import url("//unpkg.com/element-ui@2.0.3/lib/theme-chalk/index.css");
</style>
