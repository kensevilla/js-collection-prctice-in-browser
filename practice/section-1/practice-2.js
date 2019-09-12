'use strict';

function collectSameElements(collectionA, collectionB) {
  var comparedList = [];
  for(let indexA = 0; indexA < collectionA.length; indexA++){
		  for(let indexB = 0; indexB < collectionB.length; indexB++){
			  var subCollectionB = collectionB[indexB];
			  for(let subIndexB = 0; subIndexB < subCollectionB.length; subIndexB++){
				  if(collectionA[indexA] == subCollectionB[subIndexB]){
					  comparedList.push(collectionA[indexA]);
				  }
			  }
		  }
  }
  return comparedList;
}
