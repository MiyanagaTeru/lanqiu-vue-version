<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NormalButton"
}
</script>

<style scoped>
  .button {
    display: inline-block;
    background: green;
    position: relative;
    padding: 5px 15px;
    cursor: pointer;
    color: white;
  }
</style>