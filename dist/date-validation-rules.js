(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['knockout', 'moment', 'i18next'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('knockout'), require('moment'), require('i18next'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.knockout, global.moment, global.i18next);
        global.dateValidationRules = mod.exports;
    }
})(this, function (_knockout, _moment, _i18next) {
    'use strict';

    var _knockout2 = _interopRequireDefault(_knockout);

    var _moment2 = _interopRequireDefault(_moment);

    var _i18next2 = _interopRequireDefault(_i18next);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // Validates that a date is in a valid date format by
    // checking against moment. Can optionally provide the date
    // format as a param.
    _knockout2.default.validation.rules.dateFormat = {
        validator: function validator(val, otherVal) {
            var isValid = true,
                dateFormat = otherVal || 'YYYY-MM-DD HH:mm';

            if (val) {
                try {
                    isValid = (0, _moment2.default)(val, dateFormat).isValid();
                } catch (e) {
                    isValid = false;
                }
            }

            return isValid;
        },
        message: _i18next2.default.t('koco-date-validation-rules.date_format_not_valid')
    };

    // Validates that a range of dates is valid by checking that
    // the end date is after the start date.
    // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    _knockout2.default.validation.rules.dateIsAfter = {
        validator: function validator(val, otherVal) {
            if (val === null || otherVal === null) {
                return true;
            }

            return (0, _moment2.default)(val).isAfter(otherVal);
        },
        message: _i18next2.default.t('koco-date-validation-rules.end_date_after_start_date')
    };

    // Variation on above.
    _knockout2.default.validation.rules.dateIsSameOrAfter = {
        validator: function validator(val, otherVal) {
            if (val === null || otherVal === null) {
                return true;
            }

            return (0, _moment2.default)(val).isSame(otherVal) || (0, _moment2.default)(val).isAfter(otherVal);
        },
        message: _i18next2.default.t('koco-date-validation-rules.end_date_after_start_date')
    };

    _knockout2.default.validation.rules.dateIsBefore = {
        validator: function validator(val, otherVal) {
            if (val === null || otherVal === null) {
                return true;
            }

            return (0, _moment2.default)(val).isBefore(otherVal);
        },
        message: _i18next2.default.t('koco-date-validation-rules.start_date_before_end_date')
    };

    _knockout2.default.validation.rules.DateIsSame = {
        validator: function validator(val, otherVal) {
            if (val === null || otherVal === null) {
                return true;
            }

            return (0, _moment2.default)(val).isSame(otherVal);
        },
        message: _i18next2.default.t('koco-date-validation-rules.dates_equal')
    };
});