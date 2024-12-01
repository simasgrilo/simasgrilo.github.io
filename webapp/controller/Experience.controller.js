sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "sap/m/FlexBox",
    "sap/m/HBox",
    "sap/m/Title",
    "sap/m/Panel",
    "sap/m/FormattedText",
    "sap/m/Toolbar",
    "sap/m/ToolbarSpacer"
    
], function(Controller, Text, FlexBox, HBox, Title, Panel, FormattedText, Toolbar, ToolbarSpacer){
    "use strict";
    return Controller.extend("simasgrilo.github.io.controller.Experience", {
        onInit : function() {
            let oPage = this.getView().byId("experiencePage");
            let oModel = this.getOwnerComponent().getModel("experienceModel");
            let aData = oModel.getData()["Experience"];
            let that = this;
            let oPanelVBox = this.getView().byId("panelVbox");
            for (let oData of aData) {
                let oJobText = new Text({
                    text: oData["JobDescription"] + " @ "  + oData["Company"]
                });
                let oJobTimeframeText = new Text({ 
                    text: oData["TimeFrame"]
                });
                //oJobTimeframeText.addStyleClass("sapUiSmallMarginBegin")
                let oPanelToolbar = new Toolbar({
                    active: true,
                    press: that.onToolbarClick
                });
                oPanelToolbar.addContent(oJobText);
                oPanelToolbar.addContent(new ToolbarSpacer());
                oPanelToolbar.addContent(oJobTimeframeText);
                //changed text aggregation content from plain string to the headerToolbar to allow custom spacing between the information in the panel header.
                let oPanel = new Panel({
                    //headerText: oPanelText.getHtmlText(),
                    headerToolbar: oPanelToolbar,
                    expandable: true
                });
                //let sContent = "".join(oData["Activities"]);
                oData["Activities"].forEach(element => {
                    let sContent = element + "\n";
                    let oText = new Text({
                        text : sContent,
                        renderWhitespace: true
                    });
                    oText.addStyleClass("bullet-list");
                    oPanel.addContent(oText);
                });
                oPanelVBox.addItem(oPanel);
            }
            oPage.addContent(oPanelVBox);
            
        },

        onNavPress : function() {
            let oApp = this.getView().getParent().getParent();
            let oMasterPage = oApp.getMasterPages()[0];
            oApp.toMaster(oMasterPage,"slide");
        },

        onToolbarClick : function(){
            console.log(this);
            let oPanel = this.getParent();
            oPanel.setExpanded(!oPanel.getExpanded());
        }
    });
});