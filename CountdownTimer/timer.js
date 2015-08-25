/*
* Author: K.C.Ashish Kumar
* Version: 1.21
*
* Usage: loadTimer(container,targetHours,targetMinutes,targetSeconds);
*/
(function() {
    window.loadTimer = function(container,tHours,tMins,tSeconds) {
        if (container) {
            var formatN = function(n) {
                return (n < 10) ? "0" + n : n;
            };
            var endTime = new Date();
            endTime.setHours(tHours);
            endTime.setMinutes(tMins);
            endTime.setSeconds(tSeconds);
            var endTimeMillis = endTime.getTime();
            var hours = 60 * 60 * 1000;
            var minutes = 60 * 1000;
            var seconds = 1000;
            setInterval(function() {
                var currentTimeMillis = new Date().getTime();
                var millis, hrs, mins, secs, prefixStr;
                if (endTimeMillis >= currentTimeMillis) {
                    millis = endTimeMillis - currentTimeMillis;
                    prefixStr = "Time Remaining";
                } else {
                    millis = currentTimeMillis - endTimeMillis;
                    prefixStr = "Time Elapsed";
                }
                hrs = Math.floor((millis) / hours);
                mins = Math.floor((millis - (hrs * hours)) / minutes);
                secs = Math.round((millis - (hrs * hours) - (mins * minutes)) / seconds);
                container.innerHTML = (new Date()).toString() + "<br/>" + prefixStr + ": <span class=\"timeLeft\">" + formatN(hrs) + ":" + formatN(mins) + ":" + formatN(secs) + "</span>";
            }, 1000);
        }
    };
}());
