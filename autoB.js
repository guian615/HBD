var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);

}

function showPage() {
    document.getElementById("load").style.display = "none";
    document.getElementById("memew").style.display = "block";

}



$('.anim').hover(function () {
    $(this).fadeOut({
        height: "100px",
        width: "100px"
    });
}, function () {
    $(this).animate({
        height: "200px",
        border: "3px solid gray",
        width: "100%"
    });
});

count = 0
$(".animation").click(function () {
    if (count % 2 == 0) {
        $(this).animate({
            height: "300px",
            width: "300px",

        });
        count++;
    } else {
        $(this).animate({
            height: "150px",
            width: "200px",
        });
        count++;
        
    }


});



$(document).ready(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (data) {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(data.srcElement.responseText)
            for (e of data) {
                $("#myTable").append("<tr><td>" + e.hobbies + "</td><td>" + e.favF + "</td><td>" + e.friends + "</td></tr>");

            }
        }
    };
    xhttp.open("GET", "demo.json", true);
    xhttp.send();
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



$("#pp").mouseenter(function () {
    $("#pp-description").fadeToggle();

})
$("#pp").mouseleave(function () {
    $("#pp-description").fadeToggle();

})

$("#pp").click(function () {
    $(".onMouseClick").toggle();

})

$(".fpic").dblclick(function () {
    window.location.href = $(this).data("link");
})

$("#btnAn").click(function () {
    $(".fpic").animate({
        height: "150px",
        width: "200px"
    });
})

$("#btnAn").dblclick(function () {
    $(".fpic").animate({
        height: "500px",
        width: "500px"
    });
})


$("#fpic1").click(function () {
    $(".friend1").show();
})

$("#fpic2").click(function () {
    $(".friend2").show();
})







function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "demo.txt", true);
    xhttp.send();
}