sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	Controller,
	JSONModel,
	formatter,
	Filter,
	FilterOperator
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            
            const oCurrencyModel = new JSONModel({
                currency: "EUR"
            })

            this.getView().setModel(oCurrencyModel, "money")
        
        },
        onFilterInvoices: function(oEvent) {
            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if(sQuery){
                aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery ));
            }

            // filter binding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items")
            oBinding.filter(aFilter)
        },
        onPress: function (oEvent) {
            const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath())
			});
		}
	});
});