'use strict';

function createUpdatedCollection(collectionA, objectB) {
	for (let collectionAIndex = 0; collectionAIndex < collectionA.length; collectionAIndex++){
		for(let collectionBIndex = 0; collectionBIndex < objectB.value.length; collectionBIndex++){
			if(collectionA[collectionAIndex].key == objectB.value[collectionBIndex]){
				collectionA[collectionAIndex].count--;
			}
		}
	}
	return collectionA;
}
