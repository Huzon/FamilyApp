//New page




//page change
function goto($link) {
    window.location.href = "./" + $link + ".html";
}

//OPENING LOAN DETAILS

function openModal(btnInfo) {
    // console.log($(btnInfo).attr('class'));
    //getting button class and using split in case the button has other classes
    var buttonClass = $(btnInfo).attr('class').split(" ")[0];
    $modal =
        $('#' + buttonClass + "-modal").addClass("modal-animation-two").removeClass("out");
    $('body').addClass('modal-active');
}
// $('.loan-details').click(function () {
//     //getting button class and using split in case the button has other classes
//     var buttonClass = $(this).attr('class').split(" ")[0];
//     $modal =
//         $('#' + buttonClass + "-modal").addClass("modal-animation-two").removeClass("out");
//     $('body').addClass('modal-active');
// })

$('.close-modal-btn').click(function () {
    //getting parent modal id to close it
    var modalId = $(this).parent().parent().parent().attr("id");
    $("#" + modalId).addClass('out');
    $('body').removeClass('modal-active');
});

//icon animation
$(document).ready(function () {
    if (window.matchMedia('(max-width: 1000px)').matches) {
        $(".sidebar").addClass('close');
    } else {
        $(".sidebar").addClass('open');

        //...
    }
    $('.animatedMenuIcon').click(function () {
        $(this).toggleClass('open');
        console.log($(".sidebar"))
        if ($(this).hasClass('open')) {
            $(".sidebar").removeClass('close').addClass('open');

        } else {
            $(".sidebar").removeClass('open').addClass('close');

        }

    });
});
//toggling open close user menu
function userMenuToggle() {
    const toggleMenu = document.querySelector(".user-menu");
    toggleMenu.classList.toggle("active");
}

function userRoleToggle() {
    const toggleMenu = document.querySelector(".role-menu");
    toggleMenu.classList.toggle("active");
}