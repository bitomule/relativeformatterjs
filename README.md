# relattiveformatterjs

A simple date relative formatter based on Swift [RelativeFormatter](https://github.com/bitomule/RelativeFormatter)

### Why?

You can use momentjs fromNow function for this but I needed a not rounded time relative formatter. momentjs rounds time so 1 month and 23 days would be displayed as “2 months” and I needed to match [RelativeFormatter](https://github.com/bitomule/RelativeFormatter) format so it would be displayed as “1 month”

### Install

```bash
$ meteor add bitomule:relativeformatterjs
```

### How to use it

relativeformatter does not translate keys for you, instead it gives you full flexibility on the internationalization package, languages and translation. It only gives you keys and count, you’re free to use them as you want to.

```javascript
	//Create RelativeFormatter object using a Date object
	var rf = new RelativeFormatter(dateObject);
	//Get translation key for formatted date
	rf.relativeKeyAndCount.key;
	//Get count for formatted date
	rf.relativeKeyAndCount.count;
	//Use key and count to render text
```

###Options

relativeformmater constructor accepts an options paramters that could include

####idiomatic (default:false)

Uses idiomatic format keys for some dates:
- yesteday
- tomorrow
- seconds ago
- in a few seconds

But keep in mind that relativeformatterjs only gives you the keys, translation depends on you.

####precision (default:RelativeFormatter.Precision.Second)

Sometimes you just need to format months, years, or days, time under that intervals isn’t important. You don’t need to now something is in 23 days, is just “this month”. Theres where precision appears. You can use any of this precission options and that would be the lower limit in the formatted date.

- RelativeFormatter.Precision.Year
- RelativeFormatter.Precision.Month
- RelativeFormatter.Precision.Day
- RelativeFormatter.Precision.Hour
- RelativeFormatter.Precision.Minute
- RelativeFormatter.Precision.Second


##Demo

You can find a demo here: [Demo](http://relativeformatterjs-demo.meteor.com) and the repo for that demo is here: [Repository](https://github.com/bitomule/relativeformatterjs-demo)
