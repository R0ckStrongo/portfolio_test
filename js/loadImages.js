var folder = "../img/projects/landscape/thumbnails/";

$.ajax({
  url: folder,
  success: function(data) {
    window.alert("In function");
    $(data)
      .find("a")
      .attr("href", function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $("body").append("<img src='" + folder + val + "'>");
        }
      });
  }
});
