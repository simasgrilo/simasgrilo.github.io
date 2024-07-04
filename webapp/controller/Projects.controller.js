sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Panel",
    "sap/m/Text",
    "sap/m/Label",
    "sap/m/VBox",
    "sap/m/Link"

], function(Controller, Panel, Text, Label, VBox, Link){
    "use strict";
    return Controller.extend("simasgrilo.github.io.controller.Projects", {
        onInit : function(){
            const oModel = this.getOwnerComponent().getModel("projectsModel");
            const aJson = oModel["oData"]["Experience"];
            const oPage = this.getView().byId("projects");
            const oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            for (let oData of aJson) {
                let oPanel = new Panel({
                    headerText : oData["Title"],
                    expandable : true
                });
                let oVbox = new VBox({
                    
                });

                //label
                let oLabel = new Label({
                    text : oBundle.getText("publishedAt")

                });
                oLabel.addStyleClass("sapUiSmallMarginEnd");
                let oText = new Text({
                    text : oData["PublishedAt"]
                });
                oText.addStyleClass("sapUiSmallMarginEnd");
                oVbox.addItem(oLabel).addItem(oText);

                //content
                oLabel = new Label({
                    text: oBundle.getText("year")
                });
                oLabel.addStyleClass("sapUiSmallMarginEnd");
                oText = new Text({
                    text : oData["Year"]
                });
                oText.addStyleClass("sapUiSmallMarginEnd");
                oVbox.addItem(oLabel).addItem(oText);
                //for description
                oLabel = new Label({
                    text : oBundle.getText("projectsDescription")
                });
                oVbox.addItem(oLabel);
                oPanel.addContent(oVbox);                                
                oData["Description"].forEach(element => {
                    let oDesc = new Text({
                        text : element + '\n',
                        renderWhitespace : true
                    });
                    oDesc.addStyleClass("bullet-list");
                    oPanel.addContent(oDesc);
                });


                let oLinkVbox = new VBox({});
                //repository links
                let oRepoLabel = new Label({
                    text: oBundle.getText("repoLabel")
                });
                oRepoLabel.addStyleClass("sapUiSmallMarginEnd");
                let oRepoLink = new Link({
                    text : oData["Repository"],
                    href : oData["Repository"]
                });
                oLinkVbox.addItem(oRepoLabel).addItem(oRepoLink);
                oPanel.addContent(oLinkVbox);
                
                oPage.addContent(oPanel);

            }
        }
    });

})