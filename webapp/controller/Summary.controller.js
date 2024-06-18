sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/Text"
	],
	function (BaseController, Text) {
		"use strict";

		return BaseController.extend("com.simasgrilo.homepage.homepageui5.controller.Summary", {
			onInit: function () {
				const oModel = this.getOwnerComponent().getModel("summaryModel");
				const aJson = oModel["oData"]["summary"];
				const oView = this.getView().byId("summary");
				var sContent = "";
				for (let sText of aJson) {
					sContent += sText + '\n\n'

				}
				var oText = new Text({
					text: sContent + '\n',
					renderWhitespace : true,
					wrapping: true
				});
				oView.addContent(oText);
				// aJson.forEach(function(elem) {
				// 	this._appendDOM(elem, oArea);
				// });
			},


			onClickMe : function () {
				console.log(this.getView().getModel("summaryModel"));
			}

		});
	}
  );
