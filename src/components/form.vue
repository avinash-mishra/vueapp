<template>
  <div id="id">
      <h1>Create an Item</h1>
      <form class="form" @submit.prevent="addItem">
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label>Item Name</label>
                      <input type="text" class="form-control" v-model="item.name">
                      <small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                      <label>Item Price</label>
                      <input type="text" class="form-control col-md-6" v-model="item.price">
                      <small class="text-danger" v-if="errors.price">{{errors.price[0]}}</small>
                  </div>
              </div>
          </div>
          <br>
          <div class="form-group">
              <button  class="btn btn-success">Add Item</button>
          </div>
      </form>
  </div>
</template>
<script>
export default {
  name: "id",
  data: () => ({
      item: {},
      errors: {}
  }),
  methods: {
    addItem() {
      alert("Wow")
      .catch(function(error) {
                        Vue.set(vm.$data, 'errors', error.response.data)
                    });
    }
  }
}
</script>
<style scoped>
</style>
