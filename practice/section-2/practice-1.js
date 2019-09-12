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
		  sortedList.push({key: collection[colIndex], count: 1}); 
	  }
  }
  return sortedList;
}
