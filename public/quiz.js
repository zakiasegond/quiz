var tabQuestions= [];

	$.ajax('/Question').done(function(questionnaire){
		for (var i = 0; i < questionnaire.length; i++) {
			tabQuestions.push(questionnaire[i]);
		}
});
			console.log(tabQuestions);
