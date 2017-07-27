var currentDate = function (offset) {
    // get client's current date
    var date = new Date();

    // turn date to utc
    var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    // set new Date object
    var new_date = new Date(utc + (3600000*offset));

    return new_date;
};

module.exports = currentDate;