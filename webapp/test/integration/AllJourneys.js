/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"pp/rr/ui5app7/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"pp/rr/ui5app7/test/integration/pages/vLior",
	"pp/rr/ui5app7/test/integration/navigationJourney"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "pp.rr.ui5app7.view.",
		autoWait: true
	});
});