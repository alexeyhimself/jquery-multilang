var supported_langs = ['en', 'it']; 

var translate = function(jsdata) {
    $("[tkey]").each(function(index) {
	var strTr = jsdata [$(this).attr('tkey')];
	$(this).html(strTr);
    });
}

// even if custom lang is incompletely translates, english phrases will take place of non-translated parts
var merge_en_lang_with_any_lang = function(jsdata_any) {
    $.getJSON('lang/en.json', function(jsdata_en) {
        var jsdata = $.extend(jsdata_en, jsdata_any);
        translate(jsdata);
    });
}

var langCode = navigator.language.substr(0, 2);
if ($.inArray(langCode, supported_langs))
	$.getJSON('lang/' + langCode + '.json', merge_en_lang_with_any_lang);
else
	$.getJSON('lang/en.json', translate);
