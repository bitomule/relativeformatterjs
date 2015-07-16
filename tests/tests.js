//Helper
/*
Tinytest.add('Years difference helper', function (test) {

  var yearsago = new Date();
  yearsago.setFullYear(yearsago.getFullYear() - 2);

  test.equal(DatesDifferenceHelper.yearsDifference(yearsago,new Date()), 2);
});
*/

//Helpers

Tinytest.add('Time interval-seconds', function (test) {
  var fromDate = new Date(2014,11,15,3,20,40);
  var toDate = new Date(2014,11,15,3,21,41);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 1);
});

Tinytest.add('Time interval-minutes', function (test) {
  var fromDate = new Date(2014,11,15,3,20,40);
  var toDate = new Date(2014,11,15,3,21,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-hours', function (test) {
  var fromDate = new Date(2014,11,15,5,20,40);
  var toDate = new Date(2014,11,15,3,20,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 2);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-hours-future', function (test) {
  var fromDate = new Date(2014,11,15,3,20,40);
  var toDate = new Date(2014,11,15,5,20,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 2);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-days', function (test) {
  var fromDate = new Date(2014,11,15,3,20,40);
  var toDate = new Date(2014,11,17,3,20,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 2);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-months', function (test) {
  var fromDate = new Date(2015,7,1,3,20,40);
  var toDate = new Date(fromDate);
  toDate.setMonth(fromDate.getMonth() + 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-months-future', function (test) {
  var fromDate = new Date(2015,8,1,3,20,40);
  var toDate = new Date(2015,7,1,3,20,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});

Tinytest.add('Time interval-years', function (test) {
  var fromDate = new Date(2014,7,1,3,20,40);
  var toDate = new Date(2015,7,1,3,20,40);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).years, 1);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).months, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).days, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).hours, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).minutes, 0);
  test.equal(RelativeFormatter.componentsDifference(fromDate,toDate).seconds, 0);
});


//Past

Tinytest.add('Years ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31 * 12 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "yearsago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Year ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31 * 12);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "yearsago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 1);
});

Tinytest.add('This year', function (test) {
  var yearsago = new Date();
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Year).key, "thisyear");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Year).count, 0);
});

Tinytest.add('Months ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "monthsago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Month ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "monthsago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 1);
});

Tinytest.add('This month', function (test) {

  var yearsago = new Date();
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Month).key, "thismonth");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Month).count, 0);
});

Tinytest.add('Days ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "daysago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Day ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "daysago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 1);
});

Tinytest.add('Yesterday', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Day,true).key, "daysago-idiomatic");
});

Tinytest.add('Today', function (test) {

  var yearsago = new Date();
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Day).key, "today");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Day).count, 0);
});

Tinytest.add('Hours ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "hoursago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Hour ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "hoursago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 1);
});

Tinytest.add('This hour', function (test) {

  var yearsago = new Date();
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Hour).key, "thishour");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Hour).count, 0);
});

Tinytest.add('Minutes ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "minutesago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Minute ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "minutesago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 1);
});

Tinytest.add('This minute', function (test) {

  var yearsago = new Date();
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Minute).key, "thisminute");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Minute).count, 0);
});

Tinytest.add('Seconds ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).key, "secondsago_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago).count, 2);
});

Tinytest.add('Now', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Second,true).key, "now");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Second,true).count, 0);
});

Tinytest.add('Some seconds ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Second,true).key, "secondsago-idiomatic");
  test.equal(RelativeFormatter.getKeyAndCount(yearsago,RelativeFormatter.Precision.Second,true).count, 0);
});

//Future

Tinytest.add('Years ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 12 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "yearsahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Year ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 12);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "yearsahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 1);
});

Tinytest.add('Months ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "monthsahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Month ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "monthsahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 1);
});

Tinytest.add('Days ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 2);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "daysahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Day ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "daysahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 1);
});

Tinytest.add('Tomorrow', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead,RelativeFormatter.Precision.Day,true).key, "daysahead-idiomatic");
});

Tinytest.add('Hours ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 2 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "hoursahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Hour ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "hoursahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 1);
});


Tinytest.add('Minutes ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 2 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "minutesahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Minute ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "minutesahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 1);
});

Tinytest.add('Seconds ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 2 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).key, "secondsahead_count");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead).count, 2);
});

Tinytest.add('Some seconds ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 2 + 1);
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead,RelativeFormatter.Precision.Second,true).key, "secondsahead-idiomatic");
  test.equal(RelativeFormatter.getKeyAndCount(yearsahead,RelativeFormatter.Precision.Second,true).count, 0);
});