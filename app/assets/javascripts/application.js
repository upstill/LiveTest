// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function appd(text) {
  var p = document.createElement("P");
  var t = document.createTextNode(text);
  p.appendChild(t);
  $('div.results')[0].appendChild(p);
}

function ltclick(event) {
	$.ajax( { type: "GET",
		dataType: "json",
		url: "/lt/ping",
		error: function (jqXHR, textStatus, errorThrown) {
			appd(jqXHR.responseText);
		},
		success: function (responseData, statusText, xhr) {
			appd(xhr.responseText);
		}
	} )
  event.preventDefault();
}
