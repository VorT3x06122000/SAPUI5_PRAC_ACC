/*global QUnit*/

sap.ui.define([
	"pracproject1/controller/prac1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("prac1 Controller");

	QUnit.test("I should test the prac1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
