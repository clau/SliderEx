var SliderEx = new Class({
	Extends: Slider,
	
	// Binds does not support inheritance..
	// Therefore, we have to declare the new bindings as well as the existing ones.
	Binds: ['clickedElement', 'draggedKnob', 'scrolledElement',
			'releasedElement'],

	releasedElement: function(event) {
		SliderEx.dragging = false;
		document.removeEvent('mousemove', this.clickedElement);
		document.removeEvent('mouseup', this.releasedElement);
	},

	clickedElement: function(event) {
		if (event.target != this.knob) {
			SliderEx.dragging = true;
			document.addEvent('mousemove', this.clickedElement);
		}
		document.addEvent('mouseup', this.releasedElement);

		this.parent(event);
	}
});

// For suppressing the text-selection cursor when dragging
SliderEx.dragging = false;
window.addEvent('selectstart', function(e) {
	if (SliderEx.dragging) {
		return false;
	}
});