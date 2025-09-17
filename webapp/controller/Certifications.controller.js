sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Panel",
    "sap/m/HBox",
    "sap/ui/core/HTML"
], function(Controller, Panel, HBox, HTML) {
    "use strict";
    return Controller.extend("com.simasgrilo.homepage.homepageui5.controller.Certifications", {
        onInit: function() {
            const oModel = this.getOwnerComponent().getModel("certsModel");
            const aJson = oModel.getData()["certifications"];
            const oPage = this.getView().byId("certificationsPage");
            for (const oEntry of aJson) {
                let [[sCompany, aCerts]] = Object.entries(oEntry);
                let oPanel = new Panel({
                    headerText: sCompany,
                    expandable: false,
                    expanded: false,
                });
                let oHBox = new HBox({
                    justifyContent: "Center",
                    alignItems: "Center", 
                });
                aCerts.forEach(element => {
                    let oContent = new HTML({
                        content : element.embed
                    });
                    oHBox.addItem(oContent)
                });
                oPanel.addContent(oHBox);
                oPage.addContent(oPanel);
            }  
        },

        onNavPress : function() {
            let oApp = this.getView().getParent().getParent();
            let oMasterPage = oApp.getMasterPages()[0];
            oApp.toMaster(oMasterPage,"slide");
        }

    });
});