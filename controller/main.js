var _ = require('common/util');
var TextView = require('ui').TextView;
var LinearLayout = require('ui').LinearLayout;


_.extend(exports, {
	':load': function() {
		var self = this;
		self.clear();
		
		var borderedLayout1 = new LinearLayout();
		borderedLayout1.style({
			'background-color': '#000000',
			'width': 'fill-parent',
			'border': '1 1 1 1'
		});
		var borderedLayout2 = new LinearLayout();
		borderedLayout2.style({
			'background-color': '#000000',
			'width': 'fill-parent',
			'border': '1 0 1 1'
		});
		var borderedLayout3 = new LinearLayout();
		borderedLayout3.style({
			'background-color': '#000000',
			'width': 'fill-parent',
			'border': '1 1 0 1'
		});
		
		var textView1 = new TextView();
		textView1.style({
			'background-color': '#ffffff',
			'width': 'fill-parent'
		});
		var textView2 = new TextView();
		textView2.style({
			'background-color': '#ffffff',
			'width': 'fill-parent'
		});
		var textView3 = new TextView();
		textView3.style({
			'background-color': '#ffffff',
			'width': 'fill-parent'
		});
		textView1.label("I will full have border!");
		textView2.label("I don't have border right!");
		textView3.label("I don't have border bottom!");

		borderedLayout1.add( textView1 );
		borderedLayout2.add( textView2 );
		borderedLayout3.add( textView3 );
		self.add( borderedLayout1 );
		self.add( borderedLayout2 );
		self.add( borderedLayout3 );
		
		console.log('View was loaded');
	}
});
