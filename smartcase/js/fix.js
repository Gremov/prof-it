$(window).on("load resize", function () {
    var teamBoxHeight = $(".team-container .team-box").height();
    var needHeight = teamBoxHeight + 190;
    $(".team-container .image-side").height(needHeight);
    $(".team-container .text-side-main").height(needHeight);
});
