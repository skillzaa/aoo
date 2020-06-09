import {uuid} from './uuid.js';
/**this class will take an array of objects with an id field and manage it completely. */
export default class Aoo{
constructor(aoo=[]){
this.debugMode = true;
this.debugIdCounter = 1;//first is cornorstone
this.idMode = "numbers"; //"string"
this.aoo = aoo;    //the aoo = an array not an object
}
///just check
addNew(incomming={}){
if(typeof incomming.id == "undefined" ){
incomming.id = this.newId();
}  
this.aoo.push(incomming);
}
indexToId(index){
let item = this.aoo[index];
return item.id;
}
idToIndex(id){
let index= null;
this.aoo.forEach((e,idx) => {
    if(e.id==id){index=idx;}
});
return index;
}
isFirst(id){
if(this.aoo[0].id==id){return true;}
else {return false;}
}//getItem
getFirst(){
return this.aoo[0];
}//getItem
get firstNode(){
return this.aoo[0];
}//getItem
getLast(){
return this.aoo[this.aoo.length-1];
}//getItem
isLast(id){
if(this.aoo[this.aoo.length-1].id==id){return true;}
else {return false;}
}//getItem
search(value,prop="id"){
let final =false;    
this.aoo.forEach(e => {
    if(e[prop]==value){final =  e;}
});
return final;
}//
searchAll(prop="id",value=0){
let final =[];    
this.aoo.forEach(e => {
    if(e[prop]==value){final.push(e);}
});
return final;
}//
findChildren(parentItemId){
let final =[];    
this.aoo.forEach(e => {
    if(e['parentId']==parentItemId){final.push(e);}
});
return final;
}//

searchAnd(prop1,prop2,value1,value2){
let final =false;    
this.aoo.forEach(e => {
    if( (e[prop1]==value1)
        && (e[prop2]==value2)
    ){final =  e;}
});
return final;
}//
//------------------Batch 3
find(id){
let final =false;    
this.aoo.forEach(e => {
    if(e.id==id){final =  e;}
});
return final;
}//getItem
findByIndex(index){
if(index > this.aoo.length-1){
  return null;
} else{
  return this.aoo[index];
} 
}//getItem
sortBySortOrder(){
let sorted=    this.aoo.sort((a, b)=> {
    const bandA = this.h.isSet(a.sortOrder,0)
    const bandB = this.h.isSet(b.sortOrder,0)
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      });
return sorted;      
}//sortBySortOrder
sortAooBySortOrder(){
let sorted=    this.aoo.sort((a, b)=> {
    const bandA = this.h.isSet(a.sortOrder,0)
    const bandB = this.h.isSet(b.sortOrder,0)
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      });
this.aoo=sorted;      
return true;      
}//sortBySortOrder
//......................
push(a){
this.aoo.push(a);
return this.aoo;
}
get length(){
    return this.aoo.length;
}
getNext(item){
let isLast = this.isLast(item.id);    
if(isLast == false){
let itemIndex = this.idToIndex(item.id);
return this.aoo[itemIndex+1];
}else{return false;}    
}//fn
/**take its own aoo(arr of obj not aoo class) and not the this.aoo */
getNextBySortOrder(item,arrayOfObjects){
let sorted= arrayOfObjects.sort((a, b)=> {
  const bandA = a.sortOrder;
  const bandB = b.sortOrder;
      let comparison = 0;
      if (bandA > bandB) {comparison = 1;
      } else if (bandA < bandB) {comparison = -1;
      }
      return comparison;
    });    
return sorted;
//----------------     
}//fn
getPrevious(item){
let isFirst = this.isFirst(item.id);    
if(isFirst == false){
let itemIndex = this.idToIndex(item.id);
return this.aoo[itemIndex-1];
}else{return false;}    
}
setValueAll(property,value){
let arr=[];
this.aoo.forEach(e => {
    e[property] = value;
});
}    

sortByProperty(property){
let sorted=    this.aoo.sort((a, b)=> {
    const bandA = this.h.isSet(a[property],0)
    const bandB = this.h.isSet(b[property],0)
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      });
return sorted;      
}//sortBySortOrder        
delete(item){
this.aoo = this.aoo.filter(i=> i.id !== item.id);
}
newId(){
if(this.debugMode === true){
  return this.debugIdCounter++;
}else{
  return uuid();
}
}
///000000000000000000000000000000
}//class ends    

/** the is no findParent function since findParent  = 
 * find(parentId)
 * 
 */
//module.exports = Aoo;