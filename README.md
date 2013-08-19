jQuery Sublist Filter
=======================

This is a jQuery plugin to filter through sublist and only display sublist containing the seatch term.

Usage
-----------------

In your html you might have this markup.

	<input type="text" id="search">

	<ul class="list">
		<li>
			<h3>Ford</h3>
			<ul class="sublist">
				<li><a href="#">Ford Mondeo</a></li>
				<li><a href="#">Ford Focus</a></li>
				<li><a href="#">Ford Fiesta</a></li>
				<li><a href="#">Ford Fusion</a></li>
				<li><a href="#">Ford Mustang</a></li>
				<li><a href="#">Ford C-MAX</a></li>
				<li><a href="#">Ford Taurus</a></li>
			</ul>
		</li>
	</ul>

Then in your javascript file you put this.

	$("#search").sublistFilter({
		list: ".list",
		sublist: ".sublist",
		reqLength: 2
	});

*list: The class of the main ul.
*sublist: The class of the sub-uls.
*reqLength: How many characters before the filtering starts.

Download the example to see the full demo.