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

//DROP DOWN
(function ($) {
    var CheckboxDropdown = function (el) {
        var _this = this;
        this.isOpen = false;
        this.areAllChecked = false;
        this.$el = $(el);
        this.$label = this.$el.find('.dropdown-label');
        this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
        this.$inputs = this.$el.find('[type="checkbox"]');

        this.onCheckBox();

        this.$label.on('click', function (e) {
            e.preventDefault();
            _this.toggleOpen();
        });

        this.$checkAll.on('click', function (e) {
            e.preventDefault();
            _this.onCheckAll();
        });

        this.$inputs.on('change', function (e) {
            _this.onCheckBox();
        });
    };

    CheckboxDropdown.prototype.onCheckBox = function () {
        this.updateStatus();
    };

    CheckboxDropdown.prototype.updateStatus = function () {
        var checked = this.$el.find(':checked');

        this.areAllChecked = false;
        this.$checkAll.html('Check All');

        if (checked.length <= 0) {
            this.$label.html('Select Company');
        }
        else if (checked.length === 1) {
            this.$label.html(checked.parent('label').text());
        }
        else if (checked.length === this.$inputs.length) {
            this.$label.html('All Selected');
            this.areAllChecked = true;
            this.$checkAll.html('Uncheck All');
        }
        else {
            this.$label.html(checked.length + ' Selected');
        }
    };

    CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
        if (!this.areAllChecked || checkAll) {
            this.areAllChecked = true;
            this.$checkAll.html('Uncheck All');
            this.$inputs.prop('checked', true);
        }
        else {
            this.areAllChecked = false;
            this.$checkAll.html('Check All');
            this.$inputs.prop('checked', false);
        }

        this.updateStatus();
    };

    CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
        var _this = this;

        if (!this.isOpen || forceOpen) {
            this.isOpen = true;
            this.$el.addClass('on');
            $(document).on('click', function (e) {
                if (!$(e.target).closest('[data-control]').length) {
                    _this.toggleOpen();
                }
            });
        }
        else {
            this.isOpen = false;
            this.$el.removeClass('on');
            $(document).off('click');
        }
    };

    var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
    for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
        new CheckboxDropdown(checkboxesDropdowns[i]);
    }
})(jQuery);