function init() {
    initEvent()
}

function initEvent() {
    $("#small-img").on("mouseover", "li", onSmallimg)
}

function onSmallimg() {
    let $this = $(this)
    $this.addClass('active').siblings('.active').removeClass('active')
        //给鼠标移入到下方的某个小图片，给这个小图片加上一个class为active，并且给其他带active小图片删除这个active
    $('.big-img').attr('src', $this.find('img').attr('bsrc'))





}

init()