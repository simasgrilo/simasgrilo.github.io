sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/Text","sap/m/HBox","sap/m/VBox","sap/m/Title","sap/m/Panel"],function(e,t,n,a,i,r){"use strict";return e.extend("simasgrilo.github.io.controller.Experience",{onInit:function(){var e=this.getView().byId("experiencePage");var n=this.getOwnerComponent().getModel("experienceModel");var a=n.getData()["Experience"];for(let n of a){var i=new r({headerText:n["JobDescription"]+" @ "+n["Company"]+"\t\t\t\t"+n["TimeFrame"],expandable:true});n["Activities"].forEach(e=>{let n=e+"\n";let a=new t({text:n,renderWhitespace:true});a.addStyleClass("bullet-list");i.addContent(a)});e.addContent(i)}}})});
//# sourceMappingURL=Experience.controller.js.map