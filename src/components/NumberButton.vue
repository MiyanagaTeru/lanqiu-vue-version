<template>
  <div class="number-button">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'NumberButton',
    props: {
      number: Number
    }
}
</script>

<style scoped>
  .number-button {
    display: inline-block;
    background-color: white;
    width: 40px;
    height: 40px;
    margin: 5px;
    line-height: 40px;
    border-radius: 2px;
    border: 2px solid pink;
    text-align: center;
    cursor: pointer;
  }
</style>