sap.ui.require([
	"sap/ui/core/Core",
	"sap/ui/core/Messaging",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (Core, Messaging, JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Chain an anonymous function to the SAPUI5 'ready' Promise
	Core.ready().then(function () {

		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");

		var oModel = new JSONModel({
			firstName: "Kotha",
			lastName: "Venkata Hemanth",
			enabled: true,
			address: {
				street: "Saroornagar",
				city: "Hyderabad",
				zip: "500035",
				country: "India"
			},
			salesAmount: 12345.6789,
			currencyCode: "INR",
			priceThreshold: 20,
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
		var oView = new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		});

		// Register the view with the message manager
		Messaging.registerObject(oView, true);

		// Insert the view into the DOM
		oView.placeAt("content");
	});
});