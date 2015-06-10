// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['knockout', 'moment'],
    function(ko, moment) {
        'use strict';

        // Validates that a date is in a valid date format by
        // checking against moment. Can optionally provide the date 
        // format as a param.
        ko.validation.rules.dateFormat = {
            validator: function(val, otherVal) {
                var isValid = true,
                	dateFormat = otherVal || 'YYYY-MM-DD HH:mm';


                if (val) {
                    try {
                        isValid = moment(val, dateFormat).isValid();
                    } catch (e) {
                        isValid = false;
                    }
                }

                return isValid;
            },
            message: 'The date format is not valid.'
        };

        // Validates that a range of dates is valid by checking that
        // the end date is after the start date.
        ko.validation.rules.dateIsAfter = {
            validator: function(val, otherVal) {
                if (val === null || otherVal === null) {
                    return true;
                }

                return moment(val).isAfter(otherVal);
            },
            message: 'The end date must be after the start date'
        };

        ko.validation.rules.dateIsBefore = {
            validator: function(val, otherVal) {
                if (val === null || otherVal === null) {
                    return true;
                }

                return moment(val).isBefore(otherVal);
            },
            message: 'The start date must be before the end date'
        };

        ko.validation.rules.DateIsSame = {
        	validator: function(val, otherVal) {
        	    if (val === null || otherVal === null) {
        	        return true;
        	    }

        	    return moment(val).isSame(otherVal);
        	},
        	message: 'The dates must be equal'
        };

    });