/**
 * Created by leituo56 on 12/24/14.
 */
var timeStampToCNString = function(time){
    if(!time)
        return null;
    var date = new Date(time);
    var result = "";
    result += (date.getYear()+1900) + "年";
    result += (date.getMonth() + 1) + "月";
    result += date.getDate() + "日";
    result += date.toString().substring(16,21);
    return result;
}

var timeToShortCNString = function(time){
    var sec = Math.floor(time / 1000);
    var min = Math.floor(sec / 60);
    var hr = Math.floor(min / 60);
    var day = Math.floor(hr / 24);
    var result = "";
    if(day > 0)
        return day + "天";
    if(hr > 0)
        return hr + "时";
    if(min > 0)
        return min + "分";
    if(sec > 0)
        return sec + "秒";
    return result;
}
var statusEN2CN = function(en){
    //NOT_STARTED, PROCESSING, COMPLETED, FAILED
    if(en=="COMPLETED")
        return "完成";
    if(en=="PROCESSING")
        return "进行中";
    if(en=="FAILED")
        return "失败";
    else
        return "未开始";
}
var statusEN2ClassName = function(en){
    //NOT_STARTED, PROCESSING, COMPLETED, FAILED
    if(en=="COMPLETED")
        return "success";
    if(en=="PROCESSING")
        return "warning";
    if(en=="FAILED")
        return "error";
    else
        return "";
}

var data = {
    "videoId": "ec1807ed-41b6-4086-bf09-8245e1cf7e11",
    "stepsStatus": {
        "TRANSCODE": {
            "status": "COMPLETED",
            "description": "完成",
            "startedAt": 1393872720470,
            "updatedAt": 1393878054102,
            "endedAt": 1393878054550
        },
        "CAMERATAKE": {
            "status": "FAILED",
            "description": "CAMERATAKE失败",
            "startedAt": 1393872720470,
            "updatedAt": 1393878054102,
            "endedAt": 1393878054550
        },
        "RSHOP": {
            "status": "PROCESSING",
            "description": "创建rShop项目完成",
            "startedAt": 1393878055420,
            "updatedAt": null,
            "endedAt": null
        },
        "ALIGNMENT": {
            "status": "FAILED",
            "description": "完成ALIGNMENT",
            "startedAt": 1417632128240,
            "updatedAt": 1417632146277,
            "endedAt": 1417633684381
        }
    }
};
var startTime = new Date(1417633684381);
console.log(timeStampToCNString(startTime));

var steps = ["TRANSCODE", "FEATURECAL", "CAMERATAKE", "SNAPSHOT", "RSHOP"];
var newData = {};
newData.videoId = data.videoId;
newData.stepsStatus = {};
for(var i in steps){
    newData.stepsStatus[steps[i]] = {status:'NOT_STARTED', description:'未开始', startedAt:null, updatedAt:null, endedAt:null};
    if(data.stepsStatus[steps[i]]){
        newData.stepsStatus[steps[i]] = data.stepsStatus[steps[i]];
    }
}
console.log(newData);

var template = $('#statusTemplate').html();
var out = _.template(template);
console.log(out(data));
$('#content').html(out(newData));

$('.hasTooltip').each(function() { // Notice the .each() loop, discussed below
    $(this).qtip({
        content: {
            text: $(this).parent().find('.hidden').html() // Use the "div" element next to this for the content
        },
        position: {
            my: 'top left',
            at: 'bottom left'
        },
        style: {
            classes: 'qtip-blue qtip-shadow'//not working
        }
    });
});

