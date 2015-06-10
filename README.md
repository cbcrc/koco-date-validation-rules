# koco-date-validation-rules
Knockout Validation rules for dates

## Installation

```bash
bower install koco-date-validation-rules
```

## Usage with KOCO

This is a shared module that is used in many other modules. The convention is to require the handler in the `knockout-validation-rules.js` file like so:

```javascript
define([
  ...
  'bower_components/koco-date-validation-rules/src/date-validation-rules'
  ...
],
```

## Usage

There are two date validation rules included.

###dateFormat

Checks the current value against a user-specified date format. If no format is provided, the default is 'YYYY-MM-DD HH:mm'

##dateIsAfter

Checks the current value against another date to ensure that the first is later. Useful for date range pickers. 

```javascript
endDate.extend({
    dateIsAfter: self.observableContent().startDate
});
```

##dateIsBefore

```javascript
startDate.extend({
    dateIsBefore: self.observableContent().endDate
});
```

##dateIsSame
