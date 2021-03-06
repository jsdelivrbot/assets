/**
 * Conterte um atributo
 * @param  {string}   attr   Nome do atributo
 * @param  {object}   def    Objeto default, utiliza $.extend() do jquery
 * @return {json}            Objeto json
 */
(function($) { $.fn.dataJson = function(attr, def) { def = def || {}; data = $(this).attr(attr) || "{}"; try { eval('data = '+data+';'); } catch(e) {data = {};} data = $.extend(def, data); return data;}; })(jQuery);


/**
 * Carrega um plugin JQuery apenas se elemento selecionado existir na página
 * @param {string}   s Seletor jquery
 * @param {array}    f Array de arquivos css ou js
 * @param {function} c Callback que será executado depois que os arquivos terminarem de carregar
 */
function $$(s, f, c) { if ($(s).length>0) head.load(f, c); }




$(function() {
	
	/* Easy popup */
	$(".popup:not(.popup-show)").hide();
	$(window).on("keyup", function(ev) { if (ev.keyCode==27) $(".popup").fadeOut(200); });
	$("body").on("click", ".popup", function(ev) {
		if (ev.target==this) $(this).fadeToggle(200);
	});
	$("body").on("click", "[data-popup]", function(ev) {
		ev.preventDefault();
		$( $(this).attr("data-popup") ).fadeToggle(200);
	});
	
});





function _init() {
	
	var f = [];
	
	
	/* Redactor */
	f = [];
	f.push("https://cdn.jsdelivr.net/gh/agenciadecricao/assets/jquery-redactor/redactor.10.1.2.css");
	f.push("https://cdn.jsdelivr.net/gh/agenciadecricao/assets/jquery-redactor/redactor.10.1.2.js");
	$$("[data-redactor]", f, function() {
		$("[data-redactor]").each(function() {
			var config = $(this).dataJson("data-redactor", {});
			$(this).redactor(config);
		});
	});
	
	
	
	/* Flickity */
	f = [];
	f.push("https://cdnjs.cloudflare.com/ajax/libs/flickity/1.1.0/flickity.min.css");
	f.push("https://cdnjs.cloudflare.com/ajax/libs/flickity/1.1.0/flickity.pkgd.min.js");
	$$("[data-flickity]", f, function() {
		$("[data-flickity]").each(function() {
			var config = $(this).dataJson("data-flickity");
			$(this).flickity(config);
		});
	});
	
	
	
	/* SlickNav */
	f = [];
	f.push("https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.4/slicknav.min.css");
	f.push("https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.4/jquery.slicknav.min.js");
	$$("[data-slicknav]", f, function() {
		$("[data-slicknav]").each(function() {
			var config = $(this).dataJson("data-slicknav");
			$(this).slicknav(config);
		});
	});
	
	
	/* Image cover */
	$$(".cover", ["https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"], function() {
		$(".cover:not(.has-cover)").each(function() {
			$(this).addClass("has-cover");
			var src = $(this).find("img").hide().attr("src");
			$(this).backstretch(src);
		});
	});
	
	
}



$(_init);
$(document).ajaxSuccess(_init);