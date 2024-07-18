sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/VBox",
    "sap/m/HBox",
    "sap/m/Title",
    "sap/m/Text"

    ], function(Control, VBox, HBox, Title, Text) {
        "use strict";
        return Control.extend("simasgrilo.github.io.controls.ExpTile",{
            metadata : {
                properties : {
                    jobTitle : {type : "string", defaultValue: ""},
                    tenure : {type : "string", defaultValue: ""},
                    jobDesctiption : {type : "sap.m.Text"},

                },
                aggregations : {
                    _items : {type : "sap.m.VBox", multiple: false, visibility: "hidden"}
                }
            },

            init: function() {

            },

            renderer : function(oRM, oControl) {

            }

        });
    }
)