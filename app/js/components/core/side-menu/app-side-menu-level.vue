<template>
	<aside
		ref="floatingMenu"
		style="position:fixed; translateX(0%) translateY(0%); width: 240px; display: none;">
<!--		<app-side-menu-level-->
<!--			:current-level="menuLevel + 1"></app-side-menu-level>-->
		{{selectedItemInfo}}
	</aside>
	<nav>
		<ul>
			<li
				v-for="(menuItem, index) in menuItems"
				@click="applyItemContext(menuItem, index)">
				{{menuItem}}
			</li>
		</ul>
	</nav>
</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from 'vue';
export default defineComponent({
	"name": "AppSideMenuLevel",
	"components": {
	},
	"props": {
		"menuLevel": {
			"type": Number,
			"required": false,
			"default": function () {
				return 0;
			}
		},
		"menuItems": {
			"type": Array,
			"required": true
		}
	},
	"data": function () {
		return {
			"selectedItemInfo": null
		}
	},

	"computed": {
	},
	"methods": {
		"applyItemContext": function (menuItem, menuItemIndex) {
			this.$nextTick(() => {
				// let xValue = this.level === 0 ? `${this.parentWidth}px` : "100%";
				// let yValue = this.$refs.listItems[menuItemIndex].offsetTop;

				this.selectedItemInfo = menuItem;
				// this.$refs.floatingMenu.style.display = "block";


				// this.$refs.floatingMenu.style.transform = `translateX(${xValue}) translateY(${yValue}px)`;

			});
		}
	}
});
</script>
<style scoped lang="scss" rel="stylesheet/scss">

</style>
