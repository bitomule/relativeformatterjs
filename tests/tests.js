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
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "yearsago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Year ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31 * 12);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "yearsago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 1);
});

Tinytest.add('This year', function (test) {
  var yearsago = new Date();

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Year}).relativeKeyAndCount.key, "thisyear");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Year}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Months ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31 * 2);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "monthsago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Month ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 31);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "monthsago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 1);
});

Tinytest.add('This month', function (test) {

  var yearsago = new Date();

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Month}).relativeKeyAndCount.key, "thismonth");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Month}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Days ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24 * 2);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "daysago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Day ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "daysago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 1);
});

Tinytest.add('Yesterday', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 24);

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Day,idiomatic:true}).relativeKeyAndCount.key, "daysago-idiomatic");
});

Tinytest.add('Today', function (test) {

  var yearsago = new Date();

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Day}).relativeKeyAndCount.key, "today");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Day}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Hours ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60 * 2);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "hoursago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Hour ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 60);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "hoursago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 1);
});

Tinytest.add('This hour', function (test) {

  var yearsago = new Date();

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Hour}).relativeKeyAndCount.key, "thishour");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Hour}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Minutes ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60 * 2);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "minutesago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Minute ago', function (test) {

  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 60);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "minutesago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 1);
});

Tinytest.add('This minute', function (test) {

  var yearsago = new Date();

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Minute}).relativeKeyAndCount.key, "thisminute");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Minute}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Seconds ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 2);
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.key, "secondsago_count");
  test.equal(new RelativeFormatter(yearsago).relativeKeyAndCount.count, 2);
});

Tinytest.add('Now', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000);

  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Second,idiomatic:true}).relativeKeyAndCount.key, "now");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Second,idiomatic:true}).relativeKeyAndCount.count, 0);
});

Tinytest.add('Some seconds ago', function (test) {
  var yearsago = new Date();
  yearsago.setTime(yearsago.getTime() - 1000 * 2);
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Second,idiomatic:true}).relativeKeyAndCount.key, "secondsago-idiomatic");
  test.equal(new RelativeFormatter(yearsago,{precision:RelativeFormatter.Precision.Second,idiomatic:true}).relativeKeyAndCount.count, 0);
});

//Future

Tinytest.add('Years ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 12 * 2);

  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "yearsahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Year ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 12);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "yearsahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 1);
});

Tinytest.add('Months ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31 * 2);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "monthsahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Month ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 31);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "monthsahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 1);
});

Tinytest.add('Days ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24 * 2);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "daysahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Day ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "daysahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 1);
});

Tinytest.add('Tomorrow', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 24);

  test.equal(new RelativeFormatter(yearsahead,{precision:RelativeFormatter.Precision.Day,idiomatic:true}).relativeKeyAndCount.key, "daysahead-idiomatic");
});

Tinytest.add('Hours ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 * 2 + 1);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "hoursahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Hour ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 60 + 1);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "hoursahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 1);
});


Tinytest.add('Minutes ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 * 2 + 1);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "minutesahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Minute ahead', function (test) {

  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 60 + 1);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "minutesahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 1);
});

Tinytest.add('Seconds ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 2 + 1);
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.key, "secondsahead_count");
  test.equal(new RelativeFormatter(yearsahead).relativeKeyAndCount.count, 2);
});

Tinytest.add('Some seconds ahead', function (test) {
  var yearsahead = new Date();
  yearsahead.setTime(yearsahead.getTime() + 1000 * 2 + 1);

  test.equal(new RelativeFormatter(yearsahead,{idiomatic:true}).relativeKeyAndCount.key, "secondsahead-idiomatic");
  test.equal(new RelativeFormatter(yearsahead,{idiomatic:true}).relativeKeyAndCount.count, 0);
});