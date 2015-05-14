$( document ).ready(function(){
	'use strict';

	//***** GLOBAL VARIABLES *****//
	
	var panelMems = chosenFilms.panel;



	//***** INITIALIZE *****//

	runToughLoveApp();


	//***** NAVIGATIONAL FUNCTIONS *****//

	function runToughLoveApp(){
		renderHandlebarsTemplate('#select-btn-template', '#select-btn-container', chosenFilms.panel);
		renderHandlebarsTemplate('#panel-section-template', '#panel-section', chosenFilms.panel);
		renderHandlebarsTemplate('#films-section-template', '#films-section', chosenFilms.panel);
		connectIsotope();
	}


	//***** HELPER FUNCTIONS *****//

	function renderHandlebarsTemplate(templateID, elemID, JSON){
		var source = $(templateID).html();
		var template = Handlebars.compile(source);
		$(elemID).html(template(JSON));
	}

	function connectIsotope(){
		var $container = $('.film-container-container');
		// init
		$container.isotope({
			// options
			itemSelector: '.film-container',
			masonry: {
				isFitWidth: true
			}
		});

		addIsotopeFunctionToElems($container);
	}

	function addIsotopeFunctionToElems($container){
		$.each(panelMems, function(panelMem, contents){
			$('.' + panelMem).on('click', function(){
				$container.isotope({ filter: '.' + panelMem });
			});
		});

		// Allow data on screen to change when user selects a different panel mem from the select button.
		$("#choose-panel-mem").change(function() {
			var selectedPanelMem = $(this).val();
			$container.isotope({ filter: '.' + selectedPanelMem });
		});
	}


});


