sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController, JSONModel) {
      "use strict";
  
      return BaseController.extend("com.simasgrilo.homepage.homepageui5.controller.App", {
        onInit: function() {
          
          const oModel = new JSONModel()

        }
      });
    }
  );
  