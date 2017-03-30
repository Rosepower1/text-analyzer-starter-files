

function getAvgWordLength(trueTokens) {
	var totalLength = trueTokens.join.length;
	return (totalLength / trueTokens.length).toFixed(2);
	// this will connect all the tokens (words in this case) together in one long string and total those 
	// characters.
	// It will then divide it by the number of tokens (words in this case) to get the average word length

}

function distinctWordCount (trueTokens) {
	var uniqueWords = [];
	for (var i = 0; i < trueTokens.length, i++) {
		if(uniqueWords.indexOf(trueTokens[i]) === -1) {
			uniqueWords.push (trueTokens [i]);
		}
	// the .indexof() method returns the position of the first occurrence in a string
	// and the method returns -1 if the value to search for never occurs.
	}

	return uniqueWords.length;
}





function getTokens(text) {
	return text.toLowerCase().match(/\b[^/s] + \b/g).sort();
	return rawString.toLowerCase().split(/[ ,!.";():-]+/).filter(Boolean).sort();
	// Do the .match and .split do the same thing? Only return true words without punctuation?
}

function removeReturns(text) {
	return text.replace(/\r?\n|\r/g, "");
	// this removes new lines or return breaks in the string
}


function textReport(text) {
	var trueTokens = getTokens(text);
	var wordCount = trueTokens.length;
	var avgWordLength = getAvgWordLength(trueTokens);
	var numUniqueWords = distinctWordCount (trueTokens);
	// whatever text is entered, it will now be transforme into tokens list through the function we 
	// we created earlier


	// time to take the data now that we have assigned it some JS hooks in the html and display
	// it to the dom
var textReport = $('js-text-report');
textReport.find('js-word-count').text(wordCount);
textReport.find('js-unique-word-count').text(numUniqueWords);
textReport.find('js-average-word-length').text(avgWordLength + 'characters');
textReport.removeClass('hidden');
}

function watchFormSubmission() {
	$('js-text-form').submit(function(event) {
		event.preventDefault();
		//to stop the form from submitting
		var userText = $(this).find('#user-text').val();
		//to make sure the text is validated first (ex. proper email format)
		this.submit(); 
		

	}
);
}


