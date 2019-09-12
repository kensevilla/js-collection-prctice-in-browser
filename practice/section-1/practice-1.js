'use strict';

function collectSameElements(collectionA, collectionB) {
  var comparedList = [];
  for(let indexA = 0; indexA < collectionA.length; indexA++){
	  for(let indexB = 0; indexB < collectionB.length; indexB++){
		  if(collectionA[indexA] == collectionB[indexB]){
			  comparedList.push(collectionA[indexA]);
		  }
	  }
  }
  return comparedList;
}
