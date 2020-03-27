  $(function() {
      function init() {
          initEvent()
      }

      function initEvent() {
          $("h3").on("click", onH3Click)
      }

      function onH3Click() {
          let $this = $(this)
          let $isShow = $(".ul:visible")
          console.log($isShow);
          if ($isShow.length > 0 && $this.siblings("ul").is(":hidden")) {
              $isShow
                  .slideUp()
          }

          $this
              .siblings("ul")
              .slideToggle()
      }
      init()
  })