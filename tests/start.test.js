//import Aoo  from './src/Aoo.js';
const Aoo = require('../dist/Aoo');
const aoo = new Aoo();//dont use{} 
aoo.addNew();
aoo.addNew();
aoo.addNew();
//.............................................
console.log('aoo :>> ', aoo);
describe('check number of items and ids', () => {

test('3 items', () => {expect(aoo.length).toBe(3)});

//test('CSSelected', () => {expect(CSSelected).toBeTruthy()});
// test('there shd be 1 less node', () => {expect(totalNodesAfter).toBeLessThan(totalNodesBefore)});

// const idOneNotExists = doc.nodes.find(1);
// test('there shd be no id 1', () => {expect(idOneNotExists).toBeFalsy()});



});    