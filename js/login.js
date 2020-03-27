$("#bth").click(function() {
    let username = $("#username").val()
    let pwd = $("#pwd").val()
    $.ajax({
        url: "http://localhost:3000/api/login",
        type: "get",

        success: function(data) {

            $.each(data, function(index, dom) {

                console.log(dom)
                let user = dom['username']


                let pas = dom['password']

                if (username == user && pwd == pas) {
                    location.href = "index.html"
                    return false

                }
                alert("用户名或者密码错误")
                return false

            })



        }


    })

})