<template>
	<aside id="app-side-menu">
		<section id="app-side-menu-button">
			<button @click="toggleMenu">O</button>
		</section>

		<section id="app-side-menu-wrapper">
			<app-side-menu-level
				:menuItems="availableRoutes">
			</app-side-menu-level>
		</section>

	</aside>

</template>
<script type="text/javascript">
"use strict";

import { defineComponent } from 'vue';
import AppSideMenuLevel from "./app-side-menu-level.vue"

export default defineComponent({
	"name": "AppSideMenu",
	"components": {
		AppSideMenuLevel
	},
	"data": function () {

	},
	"computed": {
		availableRoutes() {
			return (
				this.$router.getRoutes() || []
			).filter(
				route => route.meta?.indexed
			).map(route => {
				return {
					"name": route.name,
					"path": route.path,
					"meta": route.meta
				}
			}).sort(
				(a, b) => {
					return a.name > b.name ? 1 : -1
				}
			);
		}
	},
	"methods": {
	}
});
</script>
<style scoped lang="scss" rel="stylesheet/scss">
#app-side-menu {
	background-color: #f9f9f9;
	grid-area: app-side-menu;
	width: 48px;
	display: flex;
	flex-direction: column;
	position: relative;

	#app-side-menu-button {
		height: 48px;
		width: 48px;
	}

	#app-side-menu-wrapper {
		min-width: 48px;
		flex: 1;
		overflow: hidden;
	}
}
</style>
