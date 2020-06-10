import Aoo  from './dist/Aoo.js';

 
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
aoo.addNew();//no more add new--total 10
//.............................................
const getFirst = aoo.getFirst();
console.log('isfirst :>> ', getFirst);

console.log('isfirst :>> ', getFirst.id);

const last = aoo.getLast();

console.log('isLast :>> ', last);
console.log('isLast :>> ', last.id);
