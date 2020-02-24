$(".checkbox").change(function() {
    if(this.checked) {
        console.log($(this).attr("id") + " checked")
    }
});