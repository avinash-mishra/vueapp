<template>
  <div id="app">
      <h1>Inside mainfile</h1>
      <h1><another-file></another-file></h1>
  </div>
</template>
<script>
import anotherFile from './anotherFile.vue'

export default {
  name: "app",
  components: {
    'another-file': anotherFile
},
  data: () => ({

  })
}
</script>
<style scoped>
</style>
