    var num = 0;


    function getOldCounts(t) {
        number = t.value

    }

    function countThree(t) {


        let new_number = $(t).val();
        console.log(new_number);




        let childs = $($(t).parents()[2].children)
        console.log(childs);


        //原价
        let yuanjia = $(childs[1]).html().substring(1)

        //优惠价
        let youhui = $(childs[2].children).html().substring(1)



        //总价格
        let price = parseInt(new_number * youhui)
        Number(num += price)
        $(".prices").html(num)


        //节省价格
        let save_money = (yuanjia * new_number) - price
        $(".saves").html(save_money)
    }

    function deleteRow(t) {



        if (confirm("确定要删除这一行吗")) {


            let childs = $($(t).parents()[0])
            let new_numbers = $(childs.children()[4].children[0].children).val()







            //原价 
            let yuanjia = $(childs.children()[1]).html().substring(1)

            //优惠价
            let youhui = $(childs.children()[2].children).html().substring(1)



            //总价格

            let old = $(".prices").html()
            let price = parseInt(new_numbers * youhui)
            console.log(price);
            let a = old - price
            $(".prices").html(a)


            //节省价格
            let save_money = (yuanjia * new_numbers) - price
            $(".saves").html(save_money)
            $(t.parentNode).hide('slow')


        }

    }






























































    var json = [{
        "湖南": [{
            "长沙": ["长沙1", "长沙2", "长沙3"]
        }, {
            "湘潭": ["湘潭1", "湘潭2", "湘潭3", "湘潭4"]
        }, {
            "株洲": ["株洲1", "株洲2", "株洲3"]
        }]
    }, {
        "河南": [{
            "郑州": ["郑州1", "郑州2", "郑州3"]
        }, {
            "商丘": ["商丘1", "商丘2", "商丘3", "商丘4"]
        }, {
            "安阳": ["安阳1", "安阳2", "安阳3"]
        }]
    }, {
        "山西": [{
            "太原": ["太原1", "太原2", "太原3"]
        }, {
            "大同": ["大同1", "大同2", "大同3", "大同4"]
        }, {
            "晋中": ["晋中1", "晋中2", "晋中3"]
        }]
    }, {
        "陕西": [{
            "西安": ["西安1", "西安2", "西安3"]
        }, {
            "宝鸡": ["宝鸡1", "宝鸡2", "宝鸡3", "宝鸡4"]
        }, {
            "汉中": ["汉中1", "汉中2", "汉中3"]
        }]
    }];

    $(function() {
        $.each(json, function(index, dom) {
            $.each(dom, function(index, dom) {
                //    console.log(index);
                let province = $("  <option value='" + index + "'>" + index + "</option>")
                $("#province").append(province)
            });
        });

        $("#province").change(function() {
            $("#city option:gt(0)").remove();
            // console.log();
            let p = $(this).val()
            $.each(json, function(index, dom) {
                $.each(dom, function(index, dom) {
                    // console.log(index);
                    if (index == p) {
                        $.each(dom, function(index, dom) {
                            //      console.log(dom);
                            $.each(dom, function(index, dom) {
                                //console.log(index);
                                let city = $("  <option value='" + index + "'>" + index + "</option>")
                                $("#city").append(city)

                            })

                        })
                    }

                })

            })

        })

        $("#city").change(function() {
            $("#area option:gt(0)").remove();
            let p = $("#province").val()
            let c = $(this).val()
            $.each(json, function(index, dom) {
                $.each(dom, function(index, dom) {
                    //console.log(index);
                    if (index == p) {
                        $.each(dom, function(index, dom) {
                            $.each(dom, function(index, dom) {
                                if (index == c) {
                                    $.each(dom, function(index, dom) {
                                        console.log(dom);
                                        let area = $("  <option value='" + dom + "'>" + dom + "</option>")
                                        $("#area").append(area)


                                    })
                                }
                            })


                        })
                    }

                })



            })

        })
    })

    $.ajax({
        url: "http://localhost:3000/api/shopping_car",
        type: "get",
        success: function(data) {
            // console.log(data);
            $.each(data, function(index, dom) {
                // console.log(index);
                // console.log(dom['name']);
                // console.log(dom['old_price']);
                // console.log(dom['on_sale']);
                // console.log(dom['discount']);
                // console.log(dom['count']);
                console.log();
                $($(".tr")[index].children[0]).html(dom['name'])
                $($(".tr")[index].children[1]).append(dom['old_price'])
                $($(".tr")[index].children[2].children[0]).append(dom['on_sale'])
                $($(".tr")[index].children[3]).append(`${dom['discount']}折`)
                $($(".tr")[index].children[4].children[0].children[0]).val(dom['count'])
                    //console.log($($(".tr")[index].children[2].children[0]));

            })
        }
    })