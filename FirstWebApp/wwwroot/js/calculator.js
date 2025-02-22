$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = $("#hours").val();
        var rate = $("#rate").val();

        // Checking if the input is valid
        if (hours <= 0 || isNaN(hours)) {
            $("#error-message").show();
            $("#total").val("");
            return;
        } else {
            $("#error-message").hide();
        }

        // Calculating the total
        var total = hours * rate;
        $("#total").val("$" + total.toFixed(2));
    });
});
