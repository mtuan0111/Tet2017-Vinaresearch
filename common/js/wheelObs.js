function Wheel() {
    this.selector = $(".wheel-obs");
    this.rotating = false;
    // this.clickObject = this.selector.find()
    this.rotateObject = this.selector.find('#wheelRotate');
    this.rotateObjs = this.rotateObject.find("[data-number]");

    var points_array = [1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 20, 20, 20, 30, 30, 50, 300, 1000];
    this.shuffleArray = shuffle(points_array);

    this.bindingPoint = function() {
        for (i = 0; i < this.shuffleArray.length; i++) {
            var point_value = document.createElement("span");
            point_value.setAttribute("data-number", i + 1);
            point_value.setAttribute("class", "pointValue");
            point_value.innerHTML = this.shuffleArray[i];
            this.rotateObjs[i].innerHTML = "";
            this.rotateObjs[i].append(point_value);
        }
    }
    this.bindingPoint();
    // this.rotate();
}

// Wheel.prototype.shuffle = function(){}

Wheel.prototype.rotate = function(point_value='') {
    // alert(123);
    // console.log(this.rotate);
    var _this = this;

    var elem = _this.rotateObject.stop(true, false).removeClass("autoWheel");
    // var elem = _this.rotateObject.stop(true, false);
    var current_deg = get_current_rotate("wheelRotate");
    // console.log(current_deg);
    // console.log(_this)
    //- setting variable
    var point_peace = 0;
    point_peace = getRandomIntInclusive(0, _this.shuffleArray.length);
    if(point_value != ''){
        while (point_value !== _this.shuffleArray[point_peace]) {
            //- console.log(point_value);
            point_peace = getRandomIntInclusive(0, _this.shuffleArray.length);
        }
    }
    point_value = _this.shuffleArray[point_peace];
    // console.log(_this.shuffleArray);
    // console.log("point_peace: ", point_peace);
    var loop = getRandomIntInclusive(4, 6);
    var random_pointer = getRandomIntInclusive(-8,8);
    var rotate_duration = getRandomIntInclusive(10000, 12000);
    var horizontal_deg = 90;
    var deg_rotate = -(loop * 360 + (point_peace) * 18) + random_pointer + horizontal_deg;
    // console.log("deg_rotate: ", deg_rotate);

    // $(document).off("click",_this.rotateObject.selector);
    _this.rotating = true;
    $({deg: current_deg}).animate({deg: deg_rotate}, {
        duration: rotate_duration,
        easing: "easeOutQuart",
        specialEasing: "easeOutQuart",
        step: function(now){
            elem.css({
                '-webkit-transform': "rotate(" + now + "deg)",
                '-moz-transform': "rotate(" + now + "deg)",
                '-ms-transform': "rotate(" + now + "deg)",
                '-o-transform': "rotate(" + now + "deg)",
                'transform': "rotate(" + now + "deg)"
            });
            //- elem.style.transform="rotate(" + now + "deg)";
        },
        done: function(){
            // console.log(point_value);
            var notiBroad = new notificationBroad($(".broad-obs.small"));
            notiBroad.setTakePoint(point_value);

            setTimeout(function(){
                _this.rotating = false;
            },1000)
        //   $(document).on('click',"#rotate-wheel",function(){
        //     wheel_action(200);
        //   });
        //   //- console.log(point_peace);
        //   $(".point-result").attr("data-score", points_array[point_peace]);
        //   //- console.log(get_current_rotate("rotate-wheel"));
        },
    });
};

Wheel.prototype.clickToPlay= function(point_value=''){
    var _this = this;
    // console.log("_this.rotateObject: ", _this.rotateObject);
    $(document).on("click",_this.rotateObject.selector,function(){
        // console.log(this);
        // console.log("_this.rotateObject: ", _this.rotateObject.selector);
        if(!_this.rotating)
            _this.rotate(point_value)
    })
}

function wheel_action(point_value) {
    var elem = $("#rotate-wheel").stop(true, false).removeClass("auto-wheel");
    var current_deg = get_current_rotate("rotate-wheel");
    $(document).off('click', "#rotate-wheel");

    //- setting variable
    var point_peace = 0;
    point_peace = getRandomIntInclusive(0, points_array.length);
    while (point_value !== points_array[point_peace]) {
        //- console.log(point_value);
        point_peace = getRandomIntInclusive(0, points_array.length);
    }
    //- console.log(point_peace);
    var loop = getRandomIntInclusive(4, 6);
    var random_pointer = getRandomIntInclusive(-16, 16);
    var rotate_duration = getRandomIntInclusive(10000, 12000);
    var deg_rotate = -(loop * 360 + (point_peace) * 36) + random_pointer;

    $(window).bind('beforeunload', function(e) {
        if (out) {
            return "Do you really want to leave this page now?"
        }
    });

    //- Ending setting variable

    $({
        deg: current_deg
    }).animate({
        deg: deg_rotate
    }, {
        duration: rotate_duration,
        easing: "easeOutQuart",
        specialEasing: "easeOutQuart",
        step: function(now) {
            elem.css({
                '-webkit-transform': "rotate(" + now + "deg)",
                '-moz-transform': "rotate(" + now + "deg)",
                '-ms-transform': "rotate(" + now + "deg)",
                '-o-transform': "rotate(" + now + "deg)",
                'transform': "rotate(" + now + "deg)"
            });
            //- elem.style.transform="rotate(" + now + "deg)";
        },
        done: function() {
            $(document).on('click', "#rotate-wheel", function() {
                wheel_action(200);
            });
            //- console.log(point_peace);
            $(".point-result").attr("data-score", points_array[point_peace]);
            //- console.log(get_current_rotate("rotate-wheel"));
        },
    });
}

function get_current_rotate(id) {
    var el = document.getElementById(id);
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";

    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    //- console.log('Matrix: ' + tr);

    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
    if (tr !== "none") {
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var scale = Math.sqrt(a * a + b * b);

        //- console.log('Scale: ' + scale);

        // arc sin, convert from radians to degrees, round
        var sin = b / scale;
        // next line works for 30deg but not 130deg (returns 50);
        // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

        //- console.log('Rotate: ' + angle + 'deg');
        return angle;
    } else
        return 0;
};

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}