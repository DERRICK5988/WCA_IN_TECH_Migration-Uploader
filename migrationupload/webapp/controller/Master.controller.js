sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/models",
    "sap/ui/model/Sorter",
    "sap/m/BusyDialog",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/m/MessagePopover",
    "sap/m/MessagePopoverItem",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
    "../controller/formatter",
    "sap/m/p13n/Engine",
    "sap/m/Token",
    "sap/ui/Device"
], (BaseController, JSONModel, models, Sorter, BusyDialog, Filter, FilterOperator, MessageToast, MessageBox, MessagePopover, MessagePopoverItem, exportLibrary, Spreadsheet, formatter, Engine, Token, Device) => {
    "use strict";

    return BaseController.extend("intech.migrationupload.controller.Master", {
        /* =========================================================== */
        /* begin: public methods                                     */
        /* =========================================================== */
        onInit() {
            debugger;
            this.oBusyDialog = new BusyDialog();
            this.getRouter().getRoute("Master").attachPatternMatched(this._onMasterMatched, this);
        },
        onNav: function (oEvent, sNavtarget, sFragment) {
            debugger;
            this.getModel("appView").setProperty("/previousLayout", this.getModel("appView").getProperty("/layout"));
            this.getModel("appView").setProperty("/layout", "TwoColumnsMidExpanded");
            this.getRouter().navTo("Detail", { sParam: encodeURIComponent(JSON.stringify({ sFragment: sFragment })) }, !Device.system.phone);
        },

        /* =========================================================== */
        /* begin: private methods                                     */
        /* =========================================================== */

        /**
        * Function triggered from onSearch function to retrive Debit memo/ billing doc detail 
        * @param {object} sap.ui.base.Event 
        * @private
        */
        _onMasterMatched: async function () {
            debugger;
            //When route back to Master view, removed hidden popin
            // this.byId("idProjectTable").setHiddenInPopin([]);
            //Set the layout property of the FCL control to 'OneColumn'
            this.getModel("appView").setProperty("/layout", "OneColumn");
            this.setModel(models.initiateModel.call(this), "Master");
        },

    });
});