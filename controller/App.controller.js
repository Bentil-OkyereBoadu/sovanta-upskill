sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            //set data model on view
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

             // set i18n model on view
         const i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "translate");
        },

        onShowHello : function () {
            // read msg from i18n model
         const bundle = this.getView().getModel("translate").getResourceBundle();
         const recipient = this.getView().getModel().getProperty("/recipient/name");
         const msg = bundle.getText("helloMsg", [recipient]);
         // show message
         MessageToast.show(msg);
        },

        onShowGreeting: function(){
            MessageToast.show(`Greetings....!!!!`)
        }
    });
 });