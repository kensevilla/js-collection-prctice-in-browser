'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var sortedList = [];
  for(let colIndex = 0; colIndex < collectionA.length; colIndex++){
	  var isNew = true;
	  for(let sortIndex = 0; sortIndex < sortedList.length; sortIndex++){
		  if(collectionA[colIndex] == sortedList[sortIndex].key){
			  sortedList[sortIndex].count++;
			  isNew = false;
		  }
	  } 
	  if(isNew){
		  sortedList.push({key: collectionA[colIndex], count: 1}); 
	  }
  }
  var subtrahend = 1;
  for (let listIndex = 0; listIndex < sortedList.length; listIndex++){
		for(let collectionBIndex = 0; collectionBIndex < objectB.value.length; collectionBIndex++){
			if(sortedList[listIndex].key == objectB.value[collectionBIndex]){
				sortedList[listIndex].count -= subtrahend;
				if(subtrahend < 3){
					subtrahend++;
				}
				else{
					subtrahend = 1;
				}
			}
		}
	}
	return sortedList;
}
