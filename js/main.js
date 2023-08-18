$(document).ready(function () {
    $(".play-btn").click(function (e) {
        e.preventDefault();
        $(".play-btn").addClass("hidden")
        $(".video").addClass("hidden")
        $(".video-block").trigger("play")
    });
    $(".video-block").trigger("pause")
});