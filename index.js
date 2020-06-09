import Aoo  from './src/Aoo.js';

const aoo = new Aoo();//dont use{} 
aoo.addNew();
aoo.addNew();
aoo.addNew();


    aoo.setValueAll("title", "newTitle");
    const item = aoo.search("title", "newTitle");
console.log('item :>> ', item);
    
    
//.............................................
console.log('aoo :>> ', aoo);