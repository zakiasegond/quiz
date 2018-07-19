var tabQuestions= [];

	$.ajax('/Question').done(function(contenu){
		for (var i = 0; i < contenu.length; i++) {
			tabQuestions.push(
				{
					id : contenu[i].ID,
					Q : contenu[i].QUESTIONS,
					R1 : contenu[i].REP1,
					R2 : contenu[i].REP2,
					R3: contenu[i].REP3,
					R4: contenu[i].REP4,

				});
		}
});
			console.log(tabQuestions);
