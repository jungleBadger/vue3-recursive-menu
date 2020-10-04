"use strict";

import {createRouter, createWebHistory} from "vue-router";
import AppHome from "../components/core/app-home.vue"

export default createRouter({
	"base": "/survey",
	"history": createWebHistory("/app/"),
	"routes": [
		{
			"name": "app.home",
			"path": "",
			"component": AppHome,
			"meta": {
				"indexed": false,
				"home": true
			}
		},
		{
			"name": "details",
			"path": "/details",
			"component": AppHome,
			"meta": {
				"indexed": true

			},
		}
	]
})

