sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Panel",
    "sap/m/Text",
    "sap/m/HBox",
    "sap/m/VBox",
    "sap/m/Label",
    "sap/m/Link",
],  function(Controller, Panel,Text, HBox, VBox, Label, Link){
    "use strict";
    return Controller.extend("simasgrilo.github.io.controller.Education", {
        onInit: function() { 
            let oPage = this.getView().byId("educationPage");
            let oModel = this.getOwnerComponent().getModel("educationModel");
            let aContent = oModel.getData()["Education"];
            let oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            for (let oData of aContent) {
                let oPanel = new Panel({
                    headerText : oData["Title"],
                    expandable : true
                });
                let oVbox = new VBox({
                    
                });
                for (var key in oData) {
                    if (key === "Paper"){
                        break;
                    }
                    if (key === "Title") {
                        continue;
                    }
                    let oLabel = new Label({
                        text: oBundle.getText(key)
                    });
                    oLabel.addStyleClass("sapUiSmallTinyBottom");
                    let oText = new Text({
                        text: oData[key]
                    });
                    oText.addStyleClass("sapUiSmallTinyBottom");
                    oVbox.addItem(oLabel).addItem(oText);
                }
                //add Paper as a hyperlink:
                let oLabel = new Label({
                    text: oBundle.getText("Work")
                });
                let oLink = new Link({
                    href: oData["Paper"],
                    text: oData["Work"]
                });
                oVbox.addItem(oLabel).addItem(oLink);
                oPanel.addContent(oVbox);
                oPage.addContent(oPanel);
            }

        }

    });

})