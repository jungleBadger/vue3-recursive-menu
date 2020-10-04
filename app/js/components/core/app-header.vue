<template>
  <header id="app-header">
    <h1>Application</h1>
  </header>
</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from 'vue';
export default defineComponent({
  "name": "AppHeader",
  "components": {
  },
  "computed": {
  },
  "methods": {
  }
});
</script>
<style scoped lang="scss" rel="stylesheet/scss">
#app-header {
	grid-area: app-header;
	height: 48px;
	width: 100%;
	background-color: black;
}
</style>
