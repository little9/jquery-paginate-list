// by James Little
// 2014

/// <reference path="jquery-2.1.0.min.js" />
/// <reference path="jquery.tinysort.min.js" />

(function ($) {
    var show_count = 5;

    $.fn.pagi = function paginate(show_count) {
        var total_items = $(this).children().size();

        if (show_count > total_items) {
            show_count = total_items;
        } else if (show_count < 0) {
            show_count = 1;
        }

        $('.pagi-controls').html('Viewing ' + show_count + ' of ' + total_items);

        $(this).children().each(function (count) {

            if (count > show_count - 1) {
                $(this).hide();
            } else {

                $(this).show();
            }

        });

        return this;
    }



    $.fn.pagiNext = function pagiNext(count) {
        var total_items = $(this).children().size();

        if (count < total_items) {
            show_count += 5;

            $(this).pagi(show_count);
        }

        if (show_count > total_items) {

            show_count = total_items;
        }

        return show_count;

    }

    $.fn.pagiPrev = function pagiPrev(count) {

        if (show_count != 0) {
            show_count -= 5;


        }
        if (show_count < 5) {

            show_count = 5;
        }

        $(this).pagi(show_count);
        return show_count;

    }


    $.fn.showAll = function showAll() {
        var total_items = $(this).children().size();

        $(this).pagi(total_items);
        return show_count;

    }


}(jQuery));