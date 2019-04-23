//---SENTENCES---
			const beginningSentence = [
			"Beginning {noun}.",
			"Beginning {verb}.",
			"Beginning {adverb}.",
			"Beginning {adjective}."
			];
			const middleSentence = [
			"Middle {noun}.",
			"Middle {verb}.",
			"Middle {adverb}.",
			"Middle {adjective}."
			];
			const endingSentence = [
			"Ending {noun}.",
			"Ending {verb}.",
			"Ending {adverb}.",
			"Ending {adjective}."
			];

			//---BLANKS---
			const noun = ["Noun 1", "Noun 1", "Noun 3"];
			const verb = ["Verb 1", "Verb 2", "Verb 3"];
			const adverb = ["Adverb 1", "Adverb 2", "Adverb 3"]
			const adjective = ["Adjective 1", "Adjective 2", "Adjective 3"];

			//---RANDOMIZE---
			function getRandom(item) {
			  let itemIndex = Math.floor(Math.random() * item.length);
			  let randomItem = item[itemIndex];

			  return randomItem;
			}

			//---MAKING A SENTENCE---
			function makeSentence(SENTENCE) {
			  let randomSentence = getRandom(SENTENCE); //gettting a sentence

			  if (randomSentence.search("{noun}") > 0) { //reading for the blank
				let randomPOS = getRandom(noun); //getting the blank
				let combineSentence = randomSentence.replace("{noun}", randomPOS); //replacing the old blank with the new blank
				return combineSentence;
			  }
			  else if (randomSentence.search("{verb}") > 0) {
				let randomPOS = getRandom(verb);
				let combineSentence = randomSentence.replace("{verb}", randomPOS);
				return combineSentence;
			  }
			  else if (randomSentence.search("{adverb}") > 0) {
				let randomPOS = getRandom(adverb);
				let combineSentence = randomSentence.replace("{adverb}", randomPOS);
				return combineSentence;
			  }
			  else if (randomSentence.search("{adjective}") > 0) {
				let randomPOS = getRandom(adjective);
				let combineSentence = randomSentence.replace("{adjective}", randomPOS);
				return combineSentence;
			  }
			}

			//---MAKE THE PROMPT---
			function makePrompt() {
			  let beginning = makeSentence(beginningSentence);
			  let middle = makeSentence(middleSentence);
			  let ending = makeSentence(endingSentence);

			  document.getElementById("prompt").innerHTML = beginning + " " + middle + " " + ending;
			}
