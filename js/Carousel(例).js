 let width = $("#img-wp>li").width()
 let time = null;
 //console.log(width);

 function init() {
     AutoPlay()
     initEvent()
 }

 function AutoPlay() {
     time = setInterval(function() {
         $(".right-nav").trigger("click")
     }, 1000)
 }

 function initEvent() {
     $(".nav").on("click", onClick)
 }

 function onClick() {
     if ($(":animated").length > 0) {
         return
     }
     let $this = $(this)
     if ($this.hasClass("right-nav")) {
         $("#img-wp")
             .animate({
                 "marginLeft": -width
             }, 500, function() {
                 $(this)
                     .css({
                         "marginLeft": 0
                     })
                     .append($("#img-wp").find("li:first"))

             })
     }
 }
 init()


 $.ajax({
     url: "http://localhost:3000/api/good_class",
     type: "get",
     success: function(data) {
         $.each(data, function(index, dom) {
             //     console.log(dom['书籍 ']);
             $.each(dom['家用电器'], function(index, dom) {
                 //  console.log(dom);
                 //  console.log();
                 $("#ul1 li a")[index].append(dom)
                 console.log();
             })

             $.each(dom['书籍 '], function(index, dom) {
                 // console.log(dom);
                 //     console.log();
                 $("#ul2 li a")[index].append(dom)

             })

             $.each(dom['手机数码'], function(index, dom) {
                 //  console.log(dom);
                 // console.log();
                 $("#ul3 li a")[index].append(dom)

             })

             $.each(dom['日用百货'], function(index, dom) {
                 //  console.log(dom);
                 //       console.log();
                 $("#ul4 li a")[index].append(dom)

             })
             $.each(dom, function(key, dom) {
                 $(`#title${index+1}`).append(key)
             })
         })
     },
     error: function() {
         console.log("出错了");

     }

 })







 $.ajax({
     url: "http://localhost:3000/api/shopping_mania",
     type: "get",
     success: function(data) {
         $.each(data, function(index, dom) {
             //    console.log($($(".text")[index]));
             //     console.log(dom['describe']);
             $($(".img")[index]).attr("src", `../images/${dom['img']}`)
             $($(".text")[index]).html(dom['describe'])
         })
     }
 })