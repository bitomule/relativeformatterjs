RelativeFormatter = class RelativeFormatter{


    static format(date,language,precision = RelativeFormatter.Precision.Second){
        var key = "";
        var count = 0;
        var components = RelativeFormatter.componentsDifference(date,new Date());
        if(components.years > 0){
            return TAPi18n.__("yearsago_count",{count:components.years},language);
        }else if(precision == RelativeFormatter.Precision.Year){
            return TAPi18n.__("yearsago_count",{count:1},language);
        }
        return "";
    }

    static componentsDifference(from,to){
        var dif = to.getTime() - from.getTime();
        var difDate = new Date(dif); 
        return {
            years:Math.abs(difDate.getUTCFullYear() - 1970),
            months:Math.abs(difDate.getMonth()),
            days:Math.abs(difDate.getDate()) - 1,
            hours:Math.abs(difDate.getHours()) - 1,
            minutes:Math.abs(difDate.getMinutes()),
            seconds:Math.abs(difDate.getSeconds())
        }
    }

    static get Precision(){
        return {
            Year:0,
            Month:1,
            Day:3,
            Hour:4,
            Minute:5,
            Second:6
        }
    }

}

/*
var key = ""
        var count:Int?
        if(components.year >= 2){
            count = components.year
            key = "yearsago"
        }
        else if(components.year >= 1){
            key = "yearago"
        }
        else if(components.year == 0 && precision == Precision.Year){
            return ("thisyear",nil)
        }
        else if(components.month >= 2){
            count = components.month
            key = "monthsago"
        }
        else if(components.month >= 1){
            key = "monthago"
            
        }
        else if(components.month == 0 && precision == Precision.Month){
            return ("thismonth",nil)
        }
        else if(components.weekOfYear >= 2){
            count = components.weekOfYear
            key = "weeksago"
        }
        else if(components.weekOfYear >= 1){
            key = "weekago"
        }
        else if(components.weekOfYear == 0 && precision == Precision.Week){
            return ("thisweek",nil)
        }
        else if(components.day >= 2){
            count = components.day
            key = "daysago"
        }
        else if(components.day >= 1){
            key = "dayago"
            if(idiomatic){
                key = key + "-idiomatic"
            }
        }
        else if(components.day == 0 && precision == Precision.Day){
            return ("today",nil)
        }
        else if(components.hour >= 2){
            count = components.hour
            key = "hoursago"
        }
        else if(components.hour >= 1){
            key = "hourago"
        }
        else if(components.hour == 0 && precision == Precision.Hour){
            return ("thishour",nil)
        }
        else if(components.minute >= 2){
            count = components.minute
            key = "minutesago"
        }
        else if(components.minute >= 1){
            key = "minuteago"
        }
        else if(components.minute == 0 && precision == Precision.Minute){
            return ("thisminute",nil)
        }
        else if(components.second >= 2){
            count = components.second
            key = "secondsago"
            if(idiomatic){
                key = key + "-idiomatic"
            }
        }
        else{
            key = "secondago"
            if(idiomatic){
                key = "now"
            }
        }
        
        return (key,count)

*/