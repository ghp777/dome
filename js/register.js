  $(function() {
      $("#first_name").blur(function() {
          let $parent = $(this).parent()
          $parent.find(".msg").remove()
          if ($(this).val().length == " " || $(this).val().length < 6) {
              let first_nameText = "请输入至少6位a-z字母"
              $("#text1").append("<span class='msg' style ='font-size:10px;color:red' >" + first_nameText + "</span>")


          } else {
              let first_nameText1 = "输入正确"
              $("#text1").append("<span class='msg' >" + first_nameText1 + "</span>")
          }
      })

      console.log($("label + input"));


      $("#family_name").blur(function() {
              let $parent = $(this).parent()
              $parent.find(".msg").remove()
              if ($(this).val().length == " " || $(this).val().length < 6) {
                  let first_nameText = "请输入至少6位a-z字母"
                  $("#text2").append("<span class='msg'  style ='font-size:10px;color:red'  >" + first_nameText + "</span>")

              } else {
                  let first_nameText1 = "输入正确"
                  $("#text2").append("<span class='msg' >" + first_nameText1 + "</span>")
              }
          })
          // /^(\w){6,20}$/
      $("#username").blur(function() {
          let $parent = $(this).parent()
          $parent.find(".msg").remove()
          if ($(this).val().length == " " || $(this).val().length < 6) {
              let first_nameText = "请输入至少6位a-z字母"
              $("#text3").append("<span class='msg'  style ='font-size:10px;color:red'  >" + first_nameText + "</span>")

          } else {
              let first_nameText1 = "输入正确"
              $("#text3").append("<span class='msg' >" + first_nameText1 + "</span>")
          }
      })

      $("#pwd").blur(function() {
          let $parent = $(this).parent()
          $parent.find(".msg").remove()
          if ($(this).val() == "" || $(this).val() != "" && !/^(\w){6,20}$/.test($(this).val())) {
              let first_nameText = "请输入正确的密码格式"
              $("#text4").append("<span class='msg'  style ='font-size:10px;color:red' >" + first_nameText + "</span>")
          } else {
              let first_nameText1 = "输入正确"
              $("#text4").append("<span class='msg' >" + first_nameText1 + "</span>")
          }

      })


      $("#email").blur(function() {
          let $parent = $(this).parent()
          $parent.find(".msg").remove()
          if ($(this).val() == "" || $(this).val() != "" && !/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test($(this).val())) {
              let first_nameText = "输入邮箱格式错误"
              $("#text6").append("<span class='msg'  style ='font-size:10px;color:red'>" + first_nameText + "</span>")
          } else {
              let first_nameText1 = "输入正确"
              $("#text6").append("<span class='msg'  style ='font-size:10px;color:green'>" + first_nameText1 + "</span>")
          }

      })



      $("#pwd2").blur(function() {
          let $parent = $(this).parent()
          $parent.find(".msg").remove()
          if ($(this).val() != $("#pwd").val()) {
              let first_nameText = "确认密码错误"
              $("#text5").append("<span class='msg'  style ='font-size:10px;color:red'  >" + first_nameText + "</span>")
          } else {
              let first_nameText1 = "输入正确"
              $("#text5").append("<span class='msg' >" + first_nameText1 + "</span>")
          }

      })

  })








  $(function() {
      let dayTime = 0;
      years();
      months();
      days();

      $("#year").val("--");
      $("#month").val("--");
      $("#day").val("--");

      $("#year").change(function() {
          months()
          days()
      })

      $("#month").change(function() {
          days()
      })

      function years() {
          let dates = new Date();
          let nowYear = dates.getFullYear();
          for (i = nowYear; i >= 1968; i--) {
              let str = "<option value='" + i + "'>" + i + "</option>"
              $("#year").append(str)
          }
      }



      function months() {
          $("#month").empty();
          for (let i = 1; i <= 12; i++) {
              let str = "<option value='" + i + "'>" + i + "</option>"
              $("#month").append(str)
          }


      }

      function days() {
          $("#day").empty();
          //判定润年平年进行设置 2月份
          if (parseInt($('#month').val()) == 1 || parseInt($('#month').val()) == 3 || parseInt($('#month').val()) == 5 || parseInt($('#month').val()) == 7 || parseInt($('#month').val()) == 8 || parseInt($('#month').val()) == 10 || parseInt($('#month').val()) == 12) {
              dayTime = 31;
          } else if (parseInt($('#month').val()) == 4 || parseInt($('#month').val()) == 6 || parseInt($('#month').val()) == 9 || parseInt($('#month').val()) == 11) {
              days = 30;
          } else {
              if (parseInt($("#year").val()) % 400 == 0 || (parseInt($("#year").val()) % 4 == 0 && parseInt($("#year").val()) % 100 != 0)) {
                  dayTime = 29;
              } else {
                  dayTime = 28;
              }
          }
          for (i = 1; i <= dayTime; i++) {
              let str = "<option value='" + i + "'>" + i + "</option>"
              $("#day").append(str)
          }
      }
  })

  let fr = new FileReader();
  $("#files").change(function() {
      var file = document.getElementById("files").files[0];
      fr.readAsDataURL(file);
      fr.onload = function() {
          //  console.log(fr.result);
          $("#img").prop("src", fr.result)
          $("#img").css({
              width: "100px"
          })
      }
  })