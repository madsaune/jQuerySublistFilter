/*
	Name: jQuery Sublist Filter
	Desc: A jQuery plugin to filter through sublists
	Version: 0.1
	Author: Mads Dahlen Aune
*/

// Support for older browsers
if( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	var Filter = {
		init: function( options, elem ) {
			var self = this;
			self.$elem = $( elem );
			self.options = $.extend( {}, $.fn.sublistFilter.options, options );
			
			self.list = $(self.options.list);
			self.brands = self.list.find("> li");
			self.sublist = $(self.options.sublist);
			self.products = self.sublist.find("li");

			self.getInput();
		},

		getInput: function() {
			var self = this;

			self.$elem.on("keyup", function() {
				var q = self.$elem.val().toLowerCase();
				if( q === "" || q.length < self.options.reqLength) {
					self.reset();
				} else {
					self.display( q );
				}
			});
		},

		reset: function() {
			this.brands.show();
			this.sublist.hide();
		},

		display: function( q ) {
			var self = this;

			self.brands.hide();
			self.sublist.each( function() {
				$(this).find("li").each(function() {
					var $that = $(this),
					s = $that.text().toLowerCase(),
					regex = new RegExp(q, "i");

					if(s.match(regex) !== null) {
						$that.parent().parent().show();
						$that.parent().show();
						$that.show();
					} else {
						$that.hide();
					}
				});
			});
		}
	};

	$.fn.sublistFilter = function( options ) {
		return this.each(function() {
			var filter = Object.create( Filter );
			filter.init( options, this );
		});
	};

	$.fn.sublistFilter.options = {
		list: ".list",
		sublist: ".sublist",
		reqLength: 2
	};
})( jQuery, window, document );