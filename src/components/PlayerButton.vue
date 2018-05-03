<template>
  <div class="player-button" :class="{top: isTop}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PlayerButton',
  props: {
    isTop: Boolean
  }
}
</script>

<style scoped>
.player-button {
  display: inline-block;
  height: 30px;
  width: 20px;
  line-height: 30px;
  margin: 5px;
  border: 2px solid #f9e5e8;
  border-radius: 2px;
  background-color: white;
  text-align: center;
}

.top {
  box-shadow: 0 0 0 2px gold;
}
</style>