sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("navdemo.controller.view2", {
            onInit: function () {

            },
            back: function(oEvent){
                var route= sap.ui.core.UIComponent.getRouterFor(this);
                route.navTo("prac1");
            }
        });
    });
