$(document).ready(function() {
    $("#button").click(function() {
        $(".load").animate({ width: "500px" }, {
            duration: 30000,
            easing: "linear",
            step: function(x) {
                $("#testo").text(Math.round((x * 100) / 500) + "%");
            },
        });
    });
});