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
const justAChild = aoo.addNew();
//.............................................

describe('check number of items and ids', () => {

test('3 items', () => {expect(aoo.length).toBe(10)});
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

describe('is first is last by id', () => {

test('is first', () => {expect(aoo.isFirst(1)).toBeTruthy()});

test('is not first', () => {expect(aoo.isFirst(2))
    .toBeFalsy()});
});


describe('get last and is last', () => {
const last = aoo.getLast();
test('id=10', () => {expect(last.id).toBe(10)});

test('is last', () => {expect(aoo.isLast(last.id)).toBeTruthy()});
});

describe('setValueAll', () => {
aoo.setValueAll("title", "newTitle");
//----my first test loop----keep working on tests
aoo.aoo.forEach(a => {
test('loop', () => {expect(a.title).toMatch(/newTitle/)});    
});
});


describe('serch', () => {
//serch finds and send first item with that value..at the moment all titles are same so i will get index 0;    
const item = aoo.search("title", "newTitle");
test('index 0 id 1', () => {expect(item.id).toBe(1)});    


});

console.log('aoo :>> ', aoo);