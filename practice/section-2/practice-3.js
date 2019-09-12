'use strict';

function countSameElements(collection) {
  var sortedList = [];
  var currentChar;
  var currentCharCount;
  for(let colIndex = 0; colIndex < collection.length; colIndex++){
	  var isNew = true;
	  
	  if(collection[colIndex].length>1){
		  var newString = filterString(collection[colIndex]);
		  currentChar = newString[0];
		  currentCharCount = parseInt(newString.substr(1));
	  }
	  else{
		  currentChar = collection[colIndex];
		  currentCharCount = 1;
	  }
	  
	  for(let sortIndex = 0; sortIndex < sortedList.length; sortIndex++){
		  if(currentChar == sortedList[sortIndex].name){
			  sortedList[sortIndex].summary+= currentCharCount;
			  isNew = false;
		  }
	  } 
	  if(isNew){
		sortedList.push({name: currentChar, summary: currentCharCount}); 
	  }
  }
  return sortedList;
}

function filterString(stringVal){
	var filteredString ="";
		for(let stringIndex = 0; stringIndex < stringVal.length; stringIndex++){
			if(isValidCharacter(stringVal[stringIndex])){
				filteredString = filteredString.concat(stringVal[stringIndex]);
			}
		}
	return filteredString;
}

function isValidCharacter(c){
	return (c.toLowerCase() != c.toUpperCase()) || (c >= '0' && c <= '9');
}



