<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 74px);
  padding: 10px;
  background: linear-gradient(to bottom, #fff 2%, rgb(53, 79, 223));
}
@media (min-width: 480px) {
  .container {
    min-height: calc(100vh - 56px);
  }
}
</style>
