import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([5,2,1,7,6]);
numbersCollection.sort();
console.log(numbersCollection.data);