RelativeFormatter = class RelativeFormatter{

    constructor(date,options) {
        this.date = date;
        var defaultOptions = {
            precision:RelativeFormatter.Precision.Second,
            idiomatic:false
        }
        this.options = options || defaultOptions;
    }

    get relativeKeyAndCount(){
        var now = new Date();
        var dateComponents = RelativeFormatter.componentsDifference(this.date,now);
        var timeKey = "ahead";
        if(now.getTime() > this.date.getTime()){
            timeKey = "ago";
        }
        if(dateComponents.years > 0){
            return {key:"years" + timeKey + "_count",count:dateComponents.years};
        }else if(this.options.precision == RelativeFormatter.Precision.Year){
            return {key:"thisyear",count:0};
        }else if(dateComponents.months > 0){
            return {key:"months" + timeKey + "_count",count:dateComponents.months};
        }
        else if(dateComponents.months == 0 && this.options.precision == RelativeFormatter.Precision.Month){
            return {key:"thismonth",count:0};
        }else if(dateComponents.days > 0){
            if(dateComponents.days == 1 && this.options.idiomatic){
                return {key:"days" + timeKey + "-idiomatic",count:0};
            }
            return {key:"days" + timeKey + "_count",count:dateComponents.days};
        }
        else if(dateComponents.days == 0 && this.options.precision == RelativeFormatter.Precision.Day){
            return {key:"today",count:0};
        }else if(dateComponents.hours > 0){
            return {key:"hours" + timeKey + "_count",count:dateComponents.hours};
        }
        else if(dateComponents.hours == 0 && this.options.precision == RelativeFormatter.Precision.Hour){
            return {key:"thishour",count:0};
        }else if(dateComponents.minutes > 0){
            return {key:"minutes" + timeKey + "_count",count:dateComponents.minutes};
        }
        else if(dateComponents.minutes == 0 && this.options.precision == RelativeFormatter.Precision.Minute){
            return {key:"thisminute",count:0};
        }else if(dateComponents.seconds > 0){
            if(dateComponents.seconds == 1 && this.options.idiomatic){
                return {key:"now",count:0};
            }
            if(this.options.idiomatic){
                return {key:"seconds" + timeKey + "-idiomatic",count:0};
            }
            return {key:"seconds" + timeKey + "_count",count:dateComponents.seconds};
        }

        return {key:"now",count:0};
    }

    static componentsDifference(from,to){
        var firstDate = from.getTime() < to.getTime() ? from : to;
        var lastDate = from.getTime() < to.getTime() ? to : from;
        var dif = lastDate.getTime() - firstDate.getTime();
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