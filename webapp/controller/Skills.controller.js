sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text"

], function(Controller, Text) {
    "use strict";
    return Controller.extend("com.simasgrilo.homepage.homepageui5.controller.Skills", {
        onInit: function() {
            const oModel = this.getOwnerComponent().getModel("skillsModel");
            const aJson = oModel["oData"]["skills"];
            const oPage = this.getView().byId("skillsPage");
            var sContent = ""
            aJson.forEach(element => {
                sContent += element + '\n\n'
            });

            var oText = new Text({
                text: sContent + '\n',
                renderWhitespace : true,
                wrapping: true
            });
            oText.addStyleClass("sapUiSmallMarginBeginEnd");
            oPage.addContent(oText);
        },

        onNavPress : function() {
            let oApp = this.getView().getParent().getParent();
            let oMasterPage = oApp.getMasterPages()[0];
            oApp.toMaster(oMasterPage,"slide");
        }

    });
});