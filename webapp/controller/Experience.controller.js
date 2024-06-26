sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/m/HBox",
    "sap/m/VBox",
    "sap/m/Title",
    "sap/m/Panel"
    
], function(Controller, Text, HBox, VBox, Title, Panel){
    "use strict";
    return Controller.extend("simasgrilo.github.io.controller.Experience", {
        onInit : function() {
            var oPage = this.getView().byId("experiencePage");
            var oModel = this.getOwnerComponent().getModel("experienceModel");
            var aData = oModel.getData()["Experience"];
            for (let oData of aData) {
                var oPanel = new Panel({
                    headerText: oData["JobDescription"] + " @ "  + oData["Company"] + "\t" + oData["TimeFrame"],
                    expandable: true
                });
                //var sContent = "".join(oData["Activities"]);
                var sContent = "";
                oData["Activities"].forEach(element => {
                    sContent += element + "\n";
                });
                var oText = new Text({
                    text : sContent,
                    renderWhitespace: true
                });
                oText.addStyleClass("bullet-list");
                oPanel.addContent(oText);
                oPage.addContent(oPanel);
            }

        }
    });
});