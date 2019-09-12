'use strict';

function countSameElements(collection) {
  var sortedList = [];
  for(let colIndex = 0; colIndex < collection.length; colIndex++){
	  var isNew = true;
	  for(let sortIndex = 0; sortIndex < sortedList.length; sortIndex++){
		  if(collection[colIndex] == sortedList[sortIndex].key){
			  sortedList[sortIndex].count++;
			  isNew = false;
		  }
	  } 
	  if(isNew){
		  var splitVal = collection[colIndex].split("-");
		  if(splitVal.length > 1){
			sortedList.push({key: splitVal[0], count: parseInt(splitVal[1])})
		  }
		  else{
			sortedList.push({key: collection[colIndex], count: 1}); 
		  }
	  }
  }
  return sortedList;
}
