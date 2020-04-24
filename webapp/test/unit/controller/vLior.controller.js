/*global QUnit*/

sap.ui.define([
	"pp/rr/ui5app7/controller/vLior.controller"
], function(oController) {
	"use strict";

	//This module tests the main controller of the app. Add any other relevant tests.
	//For more information on Qunit, see https://sapui5.hana.ondemand.com/#/topic/09d145cd86ee4f8e9d08715f1b364c51
	QUnit.module("vLior Controller");

	QUnit.test("I should test the app controller loads", function(assert) {
		var oAppController = new oController();
		var sName = oAppController.getMetadata().getName();
		assert.ok(sName, "pp/rr/ui5app7.controller.vLior");
	});

	//this is an exmaple of a Qunit that needs to be fixed 
	QUnit.test("I should test any additinal controls", function(assert) {
		assert.ok(true, "Implement test");
	});

});