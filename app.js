allCheckboxes();




// ****** Checkbox Function ***********//
// FUNCTION ARGUMENTS DEFINED:
// ****boxID = ID of checkbox on card
// ****sub = ID of div where the sub-task(s) will appear when ^^^ box is checked
// id = new ID given to 'sub' checkboxes
// lbl = label of 'sub' checkboxes (text next to checkbox)

function checks(boxID, sub, id, lbl) {
    $(boxID).change(function () {
        if (this.checked) {
            console.log($(this).attr("id") + " checked");
            $(sub).append('<input type="checkbox" class="checkboxSub" id="' + id + '">');
            $(sub).append('<label>' + lbl + '</label>');
        }
        else if (!this.checked) {
            $(sub).html('');
        }
        event.preventDefault();
    });
};

// ******* Run ALL checkbox functions ******* //
function allCheckboxes() {
    checks("#preWire", "#PWcheck", "PW", "Sub-Prewire task")
    checks("#soundInstall", "#SIcheck", "SI", "Sound sub task")
    checks("#videoInstall", "#VIcheck", "VI", "Video sub task")
    checks("#qsrInstall", "#QSRcheck", "QSR", "QSR sub task")
    checks("#other1", "#other1check", "oth1", "item1 sub task")
    checks("#other2", "#other2check", "oth2", "item2 sub task")
    checks("#other3", "#other3check", "oth3", "item3 sub task")
    checks("#other4", "#other4check", "oth4", "item4 sub task")
    checks("#other5", "#other5check", "oth5", "item5 sub task")
};

$("#submitSO").click(function () {
    event.preventDefault();
    $("#salesOrder").html("<h2>SO#: " + ($("#SO")[0].value) + "</h2>");
    console.log("SO #:" + $("#SO")[0].value);
    $(".SOForm").hide();
    $("#reSO").html('<button id="SOReEnter" type="button" onclick="SOReEnter()">Re-Enter</button>');
});

$("#submitPO").click(function () {
    event.preventDefault();
    $("#purchaseOrder").html("<h2>PO#: " + ($("#PO")[0].value) + "</h2>");
    console.log("PO #:" + $("#PO")[0].value);
    $(".POForm").hide();
    $("#rePO").html('<button id="POReEnter" type="button" onclick="POReEnter()">Re-Enter</button>');
});

function SOReEnter() {
    event.preventDefault();
    console.log("SO Re-Enter button pressed");
    $("#salesOrder").html('')
    $("#reSO").html('<p class="SOForm">SO #:<input type="text" class="input SOForm" id="SO" name="SO"><input type="submit" class="input SOForm" id="submitSO" value="Save"></p>');
};

function POReEnter() {
    event.preventDefault();
    console.log("PO Re-Enter button pressed");
    $("#purchaseOrder").html('')
    $("#rePO").html('<p class="POForm">PO #:<input type="text" class="input POForm" id="PO" name="PO"><input type="submit" class="input POForm" id="submitPO" value="Save"></p>');

};