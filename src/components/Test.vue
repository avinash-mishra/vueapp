<template>
  <div id="test">
      <h1>{{title}}</h1>
      <h2>{{message}}</h2>
      <p>{{user.firstName}}</p>
  </div>
</template>
<script>
export default {
  name: "test",
  data: () => ({
      title: "Hello world",
      message: "good one",
      user: {
        firstName: "John",
        lastName: "Doe"
      }
  })
}
</script>
<style scoped>
</style>
