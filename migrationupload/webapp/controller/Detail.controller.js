// @ts-nocheck
// @ts-ignore
sap.ui.define([
    "./BaseController",
    "../model/models",
    "sap/ui/model/json/JSONModel",
    'sap/ui/core/Fragment',
    'sap/m/p13n/MetadataHelper',
    'sap/m/p13n/Engine',
    'sap/m/p13n/SelectionController',
    'sap/m/p13n/SortController',
    'sap/m/p13n/GroupController',
    'sap/ui/model/Sorter',
    'sap/ui/core/library',
    "sap/m/BusyDialog",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, models, JSONModel, Fragment, MetadataHelper, Engine, SelectionController, SortController, GroupController, Sorter, coreLibrary, BusyDialog, Filter, FilterOperator) {
        "use strict";

        return BaseController.extend("intech.migrationupload.controller.Detail", {
            onInit: function () {
                debugger;
                // Model used to manipulate control states. The chosen values make sure,
                // detail page is busy indication immediately so there is no break in
                // between the busy indication for loading the view's meta data
                // this.getOwnerComponent().getModel("WBSMockData").metadataLoaded().then(this._onMetadataLoaded.bind(this));
                // this.oBusyDialog = new BusyDialog();
                this.setModel(sap.ui.getCore().getMessageManager().getMessageModel(), "Message");
                sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
                // this._registerForP13nDetail();
                // this.setModel(oViewModel, "Detail");
                // this.getRouter().getRoute("Master").attachPatternMatched(this._onMasterMatched, this);
                this.getRouter().getRoute("Detail").attachPatternMatched(this._onDetailMatched, this);
            },
            // onCloseDetail: function () {
            //     this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen", false);
            //     sap.ui.getCore().getMessageManager().removeAllMessages();
            //     this.getRouter().navTo("Master");
            // },
            onExit: function () {
                this.oRouter.getRoute("Detail").detachPatternMatched(this._onDetailMatched, this);
            },

            /* =========================================================== */
            /* begin: private methods                                     */
            /* =========================================================== */

            /**
            * Function triggered from onSearch function to retrive Debit memo/ billing doc detail 
            * @param {object} sap.ui.base.Event 
            * @private
            */
            _onDetailMatched: async function (oEvent) {
                var oArguments = oEvent.getParameter("arguments");

            }
        });
    });
