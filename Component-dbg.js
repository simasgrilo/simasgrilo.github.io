/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "simasgrilo/github/io/model/models",
        "sap/ui/core/IconPool"
    ],
    function (UIComponent, Device, models, IconPool) {
        "use strict";

        return UIComponent.extend("simasgrilo.github.io.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                //register SAP-TNT used icons:
                IconPool.registerFont({
                    fontFamily: "SAP-icons-TNT",
                    collectionName : "SAP-icons-TNT",
                    fontURI : sap.ui.require.toUrl("sap/tnt/themes/base/fonts")
                });


                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);