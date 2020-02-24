$(".checkbox").change(function () {
    if (this.checked) {
        console.log($(this).attr("id") + " checked")
    }
    event.preventDefault();
});

$("#submitSO").click(function () {
    $("#salesOrder").html("<h2>SO#: " + ($("#SO")[0].value) + "</h2>");
    console.log("SO #:" + $("#SO")[0].value);
    $(".SOForm").hide();
    $("#reSO").html('<form><input type="submit" id="SOReEnter" value="Re-Enter"></form>');
    event.preventDefault();
})

$("#submitPO").click(function () {
    $("#purchaseOrder").html("<h2>PO#: " + ($("#PO")[0].value) + "</h2>");
    console.log("PO #:" + $("#PO")[0].value);
    $(".POForm").hide();
    $("#rePO").html('<form><input type="submit" id="POReEnter" value="Re-Enter"></form>');
    event.preventDefault();
})

$("#SOReEnter").click(function () {
    console.log("SO Re-Enter button pressed");
    event.preventDefault();
    $(".SOForm").show();
}) 