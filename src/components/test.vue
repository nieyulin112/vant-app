<template lang="html">
  <div class="name">
    {{obj.name}}
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {
          name: null
        }
      }
    }
  },
  watch: {
    'obj.name': {
      function(oldVal, newVal) {
        console.log('oldVal', oldVal, newVal)
      },
      deep: true
    }
  }
}
</script>

<style lang="css">
</style>
