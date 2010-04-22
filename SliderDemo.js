window.addEvent('domready', function(){	
	var sliderEx = $('sliderEx');
	new SliderEx(sliderEx, sliderEx.getElement('.knob'), {
		initialStep: 25
	});
	
	var slider = $('slider');
	new Slider(slider, slider.getElement('.knob'), {
		initialStep: 75
	});
});