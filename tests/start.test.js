//import Aoo  from './src/Aoo.js';
const Aoo = require('../dist/Aoo');
const aoo = new Aoo();//dont use{} 
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
aoo.addNew();
const justAChild = aoo.addNew();//no more add new
//.............................................

describe('check number of items and ids', () => {
const arrayLength = aoo.length;
test('3 items', () => {expect(arrayLength).toBe(10)});
test('justAChild', () => {expect(typeof justAChild)
    .toMatch(/object/)});
});    

describe('check id to index ', () => {
const indexOfIdOne = aoo.idToIndex(1);
test('shd be zero', () => {expect(indexOfIdOne).toBe(0)});

const indexOfIdThree = aoo.idToIndex(3);
test('indexOfIdThree', () => {expect(indexOfIdThree).toBe(2)});//index is always one more

});    

describe('check index to id ', () => {
const IdOfIndexOne = aoo.indexToId(1);
test('shd be zero', () => {expect(IdOfIndexOne).toBe(2)});

const IdOfIndexThree = aoo.indexToId(3);
test('IdOfIndexThree', () => {expect(IdOfIndexThree).toBe(4)});
});    

describe('check index to id ', () => {
const IdOfIndexOne = aoo.indexToId(1);
test('shd be zero', () => {expect(IdOfIndexOne).toBe(2)});

const IdOfIndexThree = aoo.indexToId(3);
test('IdOfIndexThree', () => {expect(IdOfIndexThree).toBe(4)});
});    

describe('check first / last is first/ is last', () => {
const getFirst = aoo.getFirst();
const firstId = getFirst.id;
test('test getFirst', ()=>{expect(firstId).toBe(1)});

const getLast = aoo.getLast();
const lastId = getLast.id;
test('test getLast', ()=>{expect(lastId).toBe(10)});
//////---now isfirst 
const isFirstAnswer = aoo.isFirst(1);
test('test isFirstAnswer', ()=>{expect(isFirstAnswer).toBeTruthy()});
//////---now islast
const isLastAnswer = aoo.isLast(10);
test('test isLastAnswer', ()=>{expect(isLastAnswer).toBeTruthy()});

});

describe('setValueAll', () => {
aoo.setValueAll("title", "newTitle");
//----my first test loop----keep working on tests
aoo.aoo.forEach(a => {
    let ttl = a.title;
test('loop', () => {expect(ttl).toMatch(/newTitle/)});    
});

});


describe('serch', () => {
//serch finds and send first item with that value..at the moment all titles are same so i will get index 0;    
const item = aoo.search("title", "newTitle");
test('index 0 id 1', () => {expect(item.id).toBe(1)});    

//change title of id-4 which is index 3
const id4 = aoo.find(4);
id4.title = "changed";
const itemSearched = aoo.search("title", "changed");
test('title changed', () => {expect(itemSearched.id).toBe(4)});    
});

describe('SearchAll', () => {
//at the moment there is 1 title "changed" rest all are other text. so find title leaving out changed
const collection = aoo.searchAll("title", "newTitle");

test('should be 9 items', () => {expect(collection.length).toBe(9)});    
//---every title with in the collection shd be same 
//----my second test loop----keep working on tests
collection.forEach(a => {
    let ttl = a.title;
test('loop', () => {expect(ttl).toMatch(/newTitle/)});    
});
});

describe('SearchAnd', () => {
//search id = 3 and sort order = 3 ..there will be one since ids and sortORders go side by side
//this will send one /first item found
const found = aoo.searchAnd("sortOrder",4,"id",4);
const foundId = found.id;
test('found', () => {expect(foundId).toBe(4)});  
});

describe('SearchAnd ALL', () => {
//i need another property to use search AND ALL
//this will send one /first item found
aoo.setValueAll("newProp","someValue");
const found = aoo.searchAndAll("title","newTitle","newProp","someValue");
//--this shd get all except one with title = changed
test('Testing searchAndAll', () => {expect(found.length).toBe(9)});  
});

describe('Find is finding by id', () => {
const found = aoo.find(4);
//--this shd get all except one with title = changed
test('id tobe 4', () => {expect(found.id).toBe(4)});  
});

describe('SORTING is by sortOrder:: sort with out overwrite', () => {

const found1 = aoo.find(1);
found1.sortOrder = 200;

const found2 = aoo.find(2);
found2.sortOrder = 300;

const found3 = aoo.find(3);
found3.sortOrder = 400;
//--sorted
const sorted = aoo.sort();
//---now sorted index 0 should be ID-4 since id-1-2-3 are gone down by sortOrder
test('id tobe 4', () => {expect(sorted[0].id).toBe(4)});  

//chaging the sorted array should not effect the aoo since it is non-over write seperate array.
//Remeber sorted is not an Aoo just a simple array;
sorted[0].title = "SortedTitle";
sorted[1].title = "SortedTitle";
sorted[2].title = "SortedTitle";
const foundAllFromAoo = aoo.searchAll("title","SortedTitle");
test('foundAllFromAoo', () => {expect(foundAllFromAoo.length).toBe(0)});  

});



describe('SORTING BY  overwrite', () => {

const sorted = aoo.sort(true);//overWrite = true
//chaging the sorted array should NOW  effect the aoo since it is overwrite IS TRUE.
//Remeber sorted is not an Aoo just a simple array;
sorted[0].title = "SortedTitle";
sorted[1].title = "SortedTitle";
sorted[2].title = "SortedTitle";
// console.log('sorted :>> ', sorted);

const foundAllFromAoo = aoo.searchAll("title","SortedTitle");
test('foundAllFromAoo', () => {expect(foundAllFromAoo.length).toBe(3)});  //---3 elements are change/

});



describe('SORTING BY  Property', () => {
//--lets add another numeric property COST randomly
let cost = 1000;
for (let idx = 0; idx < aoo.aoo.length; idx++) {
    const e = aoo.aoo[idx];
    cost -= 20; 
    e.cost = cost;
}
const sortedByCost = aoo.sortByProperty("cost");
//console.log('sortedByCost :>> ', sortedByCost);

});

describe('Finally Delete', () => {
////first resort by id
aoo.sortByProperty("id",true);        
//---deleting by id
aoo.delete(4);
const arrayLength  = aoo.length;
test('arrayLength = 9', () => {expect(arrayLength).toBe(9)});  //---3 elements are change/
//---deleting by id--delete 4 again shd have no effect
aoo.delete(4);
const arrayLength2  = aoo.length;
test('arrayLength2 = still 9', () => {expect(arrayLength2).toBe(9)});  //---3 elements are change/
aoo.delete(1);
const arrayLength3  = aoo.length;
test('arrayLength3 = 8', () => {expect(arrayLength3).toBe(8)});  //---3 elements are change/
//========================now delete by object
const objTwo = aoo.find(2);
aoo.delete(objTwo); //del by obj
const arrayLength4  = aoo.length;
test('arrayLength4 = 8', () => {expect(arrayLength4).toBe(7)})

});
//console.log('aoo.aoo :>> ', aoo.aoo);