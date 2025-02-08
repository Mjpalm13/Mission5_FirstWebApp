$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = 20; // $20 per hour

        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number.");
        } else {
            let total = hours * rate;
            $("#totalCost").text(`$${total.toFixed(2)}`);
        }
    });
});
