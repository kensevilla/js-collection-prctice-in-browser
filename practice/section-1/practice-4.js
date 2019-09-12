'use strict';

function collectSameElements(collectionA, objectB) {
  	var comparedList = [];
	var newCollectionA = [];
	var newCollectionB = objectB.value;
	
	for(let indexA = 0; indexA < collectionA.length; indexA++){
		newCollectionA.push(collectionA[indexA].key);
	}
	
	  for(let newIndexA = 0; newIndexA < newCollectionA.length; newIndexA++){
		  for(let newIndexB = 0; newIndexB < newCollectionB.length; newIndexB++){
			  if(newCollectionA[newIndexA] == newCollectionB[newIndexB]){
				  comparedList.push(newCollectionA[newIndexA]);
			  }
		  }
	  }
	  return comparedList;
}
