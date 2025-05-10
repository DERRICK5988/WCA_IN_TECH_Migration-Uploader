sap.ui.define([
    "sap/ui/core/UIComponent",
    "intech/migrationupload/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("intech.migrationupload.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            // Initialize necessary components/ services before load screen
            this.initComponent(this);
        },

        /**
         * Initialize necessary components/ services before load screen.
         * @public
         * @override
         */
        initComponent: function (oComponent) {
            this._oComponent = oComponent;
            this._oResourceBundle = this.getModel("i18n").getResourceBundle();
            // this.setModel(this.getModel("API_CREDIT_MEMO_REQUEST_SRV").getServiceMetadata().dataServices.schema[0].entityType, "CreditMemoMetadata");
        },

        /**
         * The component is destroyed by UI5 automatically.
         * @public
         * @override
         */
        destroy: function () {
            // call the base component's destroy function
            UIComponent.prototype.destroy.apply(this, arguments);
        }
    });
});