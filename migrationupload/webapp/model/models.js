sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
    function (JSONModel, Device) {
        "use strict";

        return {
            /**
             * Provides runtime information for the device the UI5 app is running on as a JSONModel.
             * @returns {sap.ui.model.json.JSONModel} The device model.
             */
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            },
            /**
             * Define default content for credit memo model during initial load
             * @returns {sap.ui.model.json.JSONModel} The credit memo model.
             */
            initiateModel: function () {
                // var s4Base = window.location.hostname.includes("protest") ? "myprod123" :
                //     window.location.hostname.includes("pro774184b2") ? "my403692" :
                //         "my403379"; // Dev as default
                return new JSONModel({
                    bSelected: false
                    // legendItems: [
                    //     {
                    //         text: this.getResourceBundle().getText("PartialCancel"),
                    //         color: "#dd6100"
                    //     },
                    // ]
                });
            },
            /**
             * Capture the table columns defined in the view
             * @returns {Object}  Metadatahelper.
             */
            createMetadataHelper: function () {
                var oTable = this.byId("idDebitMemoTable");
                return oTable.getColumns().map((oColumn, iIndex) => ({
                    key: this.getView().getLocalId(oColumn.getId()) || oColumn.getId(),
                    label: oColumn.getLabel()?.getText() || "",
                    index: iIndex
                }));
            }
        };
    });