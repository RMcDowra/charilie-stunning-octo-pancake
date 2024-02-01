$(document).ready(function () {
  $("img").click(function () {
    console.log("position: ", $("img").position());
  });

  $("img").draggable({
    stop: function () {
      if ($("img").position().left > 300) {
        $("img").attr(
          "src",
          "https://pbs.twimg.com/profile_images/1607314822676234241/hPodyBa4_400x400.jpg"
        );

        if ($("img").position().left > 600) {
          $("img").attr(
            "src",
            "https://pbs.twimg.com/media/FVyBDxzaIAAzUoU.jpg"
          );
        }
      }
    }
  });
});