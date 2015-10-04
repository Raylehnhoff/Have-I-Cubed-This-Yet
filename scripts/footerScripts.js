var pageViewModel;

$(document).ready(function () {
    pageViewModel = new Kanai.VM.Site();
    pageViewModel.init();
    ko.applyBindings(pageViewModel, $("#page")[0]);
    $("#refreshGrid").on('click', function () {
        if (confirm(lang.refreshWarning())) {
            localStorage.removeItem("kanai_cube");
            pageViewModel.clear();
            pageViewModel.init();
        }
    });


    var $menu = $('ul.nav');
    var origOffsetY = $menu.offset().top;
    var theadWidths = $(".tab-pane.active table thead th").map(function () {
        return $(this).outerWidth();
    });
    $("a[data-toggle='tab']").on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if (target == "#panel-settings") {
            $menu.removeClass('sticky');
            $(".tab-pane.active .progress-container").removeClass("sticky-progress");
            $("table thead").removeClass('sticky-table');
        } else if(($(window).scrollTop() >= origOffsetY)) {
            $menu.addClass('sticky');
            $(".tab-pane.active .progress-container").addClass("sticky-progress");
            $(".tab-pane.active table thead").addClass('sticky-table');
            $(".sticky-table").css({ "top": (42 + $(".tab-pane.active .progress-container").height()) + "px" });
        }


        $(".tab-pane.active table thead th").each(function (idx, elem) {
            if ($(elem).is(':visible')) {
                $(elem).innerWidth(theadWidths[idx % theadWidths.length]);
            }
        });
        $(".tab-pane.active table tbody tr td").each(function (idx, elem) {
            if ($(elem).is(':visible')) {
                $(elem).innerWidth(theadWidths[idx % theadWidths.length]);
            }
        });
    });



    $(".tab-pane.active table thead th").each(function (idx, elem) {
        if ($(elem).is(':visible')) {
            $(elem).innerWidth(theadWidths[idx % theadWidths.length]);
        }
    });
    $(".tab-pane.active table tbody tr td").each(function (idx, elem) {
        if ($(elem).is(':visible')) {
            $(elem).innerWidth(theadWidths[idx % theadWidths.length]);
        }
    });


    function scroll() {
        if ($("ul.nav li.active a").attr("href") != "#panel-settings") {
            if ($(window).scrollTop() >= origOffsetY) {
                $menu.addClass('sticky');
                $(".tab-pane.active .progress-container").addClass("sticky-progress");
                $(".tab-pane.active table thead").addClass('sticky-table');
                $(".sticky-table").css({ "top": (42 + $(".tab-pane.active .progress-container").height()) + "px" });
                //$('.tab-content').addClass('menu-padding');
            } else {
                $menu.removeClass('sticky');
                $(".tab-pane.active .progress-container").removeClass("sticky-progress");
                $("table thead").removeClass('sticky-table');
                //$('.tab-content').removeClass('menu-padding');
            }
        }
    }

    document.onscroll = scroll;
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-67298813-1', 'auto');
    ga('send', 'pageview');
});