//New page




//page change
function goto($link) {
    window.location.href = "./" + $link + ".html";
}

//OPENING LOAN DETAILS

function openModal(btnInfo) {

    var buttonClass = $(btnInfo).attr('class').split(" ")[0];
    $modal =
        $('#' + buttonClass + "-modal").addClass("modal-animation").removeClass("out");
    $('body').addClass('modal-active');

}

$('.close-modal-btn').click(function () {
    //getting parent modal id to close it
    var modal = $(this).closest(".modal-container"); //imporved code -> 4Apr23
    modal.addClass('out');
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
    var toggleMenu = $(".role-menu");
    toggleMenu.toggleClass("active");
}

//////////////////////////////////////////////////////////////////////
// drag and drop files
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function () {
    $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function () {
    $droparea.removeClass('is-active');
});

// change inner text
$fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var $textContainer = $(this).prev();

    if (filesCount === 1) {
        // if single file is selected, show file name
        var fileName = $(this).val().split('\\').pop();
        $textContainer.text(fileName);
    } else {
        // otherwise show number of files
        $textContainer.text(filesCount + ' files selected');
    }
});