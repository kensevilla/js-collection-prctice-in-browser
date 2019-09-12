'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var subtrahend = 1;
  	for (let collectionAIndex = 0; collectionAIndex < collectionA.length; collectionAIndex++){
		for(let collectionBIndex = 0; collectionBIndex < objectB.value.length; collectionBIndex++){
			if(collectionA[collectionAIndex].key == objectB.value[collectionBIndex]){
				collectionA[collectionAIndex].count -= subtrahend;
				if(subtrahend < 3){
					subtrahend++;
				}
				else{
					subtrahend = 1;
				}
			}
		}
	}
	return collectionA;
}
