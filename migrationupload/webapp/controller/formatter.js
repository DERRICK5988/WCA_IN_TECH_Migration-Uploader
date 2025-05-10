sap.ui.define(["sap/ui/core/format/DateFormat", "sap/ui/core/format/NumberFormat"
], function (DateFormat, NumberFormat) {
    "use strict";

    return {
        /**
        * Format date
        * @public
        * @param {string} sFormat: date pattern, e.g ddMMyyyy
        * @returns {string} Incoming expected format
        */
        returnDataFormat: function (sFormat) {
            return DateFormat.getDateInstance({
                pattern: sFormat
            });
        },
        /**
        * Format date
        * @public
        * @param {string} sFormat: date pattern, e.g ddMMyyyy
        * @returns {string} Incoming expected format
        */
        formatDate: function (sDate, sFormat) {
            if (sDate) {
                var date = new Date(sDate);
                var oDateFormat = DateFormat.getDateInstance({
                    pattern: sFormat
                });
                return oDateFormat.format(date);
            }
            return "";
        }
    };
});