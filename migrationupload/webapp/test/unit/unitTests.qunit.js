/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"intech/migrationupload/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
