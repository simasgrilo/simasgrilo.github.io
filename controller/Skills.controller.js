sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/Text"],function(e,t){"use strict";return e.extend("com.simasgrilo.homepage.homepageui5.controller.Skills",{onInit:function(){const e=this.getOwnerComponent().getModel("skillsModel");const n=e["oData"]["skills"];const o=this.getView().byId("skillsPage");var s="";n.forEach(e=>{s+=e+"\n\n"});var i=new t({text:s+"\n",renderWhitespace:true,wrapping:true});o.addContent(i)}})});
//# sourceMappingURL=Skills.controller.js.map