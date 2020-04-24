sap.ui.define([
	"sap/ui/test/Opa5",
	"pp/rr/ui5app7/test/integration/pages/Common",
	"sap/ui/test/actions/Press"
], function(Opa5, Common, Press) {
	"use strict";
	var sViewName = "vLior";
	Opa5.createPageObjects({
		onTheAppPage: {
			baseClass: Common,

			actions: {
				//This is an exmaple of an OPA action that needs to be fixed 
				iDoMyAction: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						actions: [function() {
							//Implement your action here
						}],
						errorMessage: "implement test"
					});
				}
			},

			assertions: {

				iShouldSeeTheApp: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function() {
							Opa5.assert.ok(true, "The vLior view is displayed");
						},
						errorMessage: "Did not find the vLior view"
					});
				},

				//This is an exmaple of an OPA assertion that needs to be fixed 
				iDoMyAssertion: function() {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function() {
							Opa5.assert.ok(true, "Implement test");
						},
						errorMessage: "implement me"
					});
				}
			}
		}
	});

});