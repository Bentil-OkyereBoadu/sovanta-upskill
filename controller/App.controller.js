sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
            // read msg from i18n model
         const bundle = this.getView().getModel("i18n").getResourceBundle();
         const recipient = this.getView().getModel().getProperty("/recipient/name");
         const msg = bundle.getText("helloMsg", [recipient]);
         // show message
         MessageToast.show(msg);
        }
    });
 });