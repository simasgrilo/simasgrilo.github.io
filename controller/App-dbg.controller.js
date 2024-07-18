sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/base/Log"
    ],
    function(BaseController, JSONModel, Log) {
      "use strict";
  
      return BaseController.extend("com.simasgrilo.homepage.homepageui5.controller.App", {
          onInit: function() {
            const oModel = new JSONModel();

            fetch('./model/summary.json');
            

          },

          onEmailPress : function() {
            window.open("mailto:simasgrilo86@gmail.com");
          },

          onGithubPress : function() {
            window.open("https://github.com/simasgrilo");
          },

          onLinkedinPress : function() {
            window.open("https://www.linkedin.com/in/simasgrilo/");
          },

          onSummaryPress : function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("summary");
          },

          onSkillsPress : function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("skills");
          },

          onExperiencePress: function() { 
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("experience");
          },

          onEducationPress: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("education");
          },

          onProjectsPress: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("projects");
          }
      });
    }
  );
  