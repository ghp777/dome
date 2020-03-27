//初始化
function init() {
    Event()
}
//每隔一段时间就让轮播图移动一次
function Event() {
    setInterval("move()", 3000)
}
//移动时的动画
function move() {
    //获取每一张轮播图的宽度
    let width = $(".main_show>li").width();
    let $this = $(this)
    $('.main_show')
        .animate({ "marginLeft": -width }, 2000, function() {
            $(".main_show")
                //使ul的margin-left归位
                .css({ 'marginLeft': 0 })
                //使第一个li剪切到ul的最后
                .append($(".main_show")
                    .find("li:first"));
        })
}
init()

//问题：无法使动画结束后再开始重新计时移动！！！！！！！！！

$(function() {
    console.log($(".main_center_bottom dl"));
    $(".main_center_bottom dl").hover(function() {
        // console.log($(this).children("dt").html());
        $(".main_center_bottom dl").stop();
        $(this).children("dt").animate({ "marginLeft": "20px" }, 300)
    }, function() {
        $(this).children("dt").animate({ "marginLeft": "38px" }, 300)

    })

})