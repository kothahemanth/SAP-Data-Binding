sap.ui.require([
	"sap/ui/core/Core",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (Core, JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Chain an anonymous function to the SAPUI5 'ready' Promise
	Core.ready().then(function () {
		var oModel = new JSONModel({
			firstName: "Kotha",
			lastName: "Venkata Hemanth",
			enabled: true,
			address: {
				street: "Saroornagar",
				city: "Hyderabad",
				zip: "500035",
				country: "India"
			}
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			fallbackLocale: "",
			supportedLocales: ["", "de"]
		});

		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});