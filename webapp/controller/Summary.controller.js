sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/Text",
		"sap/m/FlexBox"
	],
	function (BaseController, Text, FlexBox) {
		"use strict";

		return BaseController.extend("com.simasgrilo.homepage.homepageui5.controller.Summary", {
			onInit: function () {
				const oModel = this.getOwnerComponent().getModel("summaryModel");
				const aJson = oModel["oData"]["summary"];
				const oView = this.getView().byId("summary");
				var sContent = "";
				const oFlexBox = new FlexBox("summaryFb", {
					alignItems: "Start",
					height: "500px",
					justifyContent: "Center"
				});
				for (let sText of aJson) {
					sContent += sText + '\n\n'

				}
				var oText = new Text({
					text: sContent + '\n',
					renderWhitespace : true,
					wrapping: true
				});
				
				oFlexBox.addItem(oText);
				oView.addContent(oFlexBox);
			},


			onClickMe : function () {
				console.log(this.getView().getModel("summaryModel"));
			},

			onNavPress : function() {
				let oApp = this.getView().getParent().getParent();
				let oMasterPage = oApp.getMasterPages()[0];
				oApp.toMaster(oMasterPage,"slide");
			}

		});
	}
  );
