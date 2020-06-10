/*
=====================================================
IT KIND OF CREATEs A SMALL DATABSE TABLE IN THE MEMORY
=====================================================
--This class will take an array of objects and manage it completely. It adds id and a sortOrder field . 
*/
export default class Aoo{
constructor(aoo=[]){
this.debugMode = true;
this.debugIdCounter = 1;//first item is id-1
this.debugSortOrderCounter = 1;//first is cornorstone
this.aoo = aoo;    //the aoo = an array not an object
}
///just check--
addNew(incomming={}){
  if(typeof incomming.id == "undefined" ){
    incomming.id = this.newId();
  }  
  if(typeof incomming.sortOrder == "undefined" ){
    //for now sortOrder is goin as id but keep it such dont link it with id
    incomming.sortOrder = this.debugSortOrderCounter++; //imp
  }    
  if(typeof incomming.parentId == "undefined" ){
    //for now sortOrder is goin as id but keep it such dont link it with id
    incomming.parentId = null;
  }    
//---creation time;
incomming.createdAt = new Date().getTime();  
this.aoo.push(incomming);
return incomming;
}
indexToId(index){
let item = this.aoo[index];
return item.id;
}
idToIndex(id){
//--this foreach is working since has arrow function????  
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
getLast(){
return this.aoo[this.aoo.length-1];
}//getItem
isLast(id){
if(this.aoo[this.aoo.length-1].id==id){return true;}
else {return false;}
}//getItem
/**Just send back the first one  */
search(prop="id",value=""){
for (let idx = 0; idx < this.aoo.length; idx++) {
  if(this.aoo[idx][prop]==value){return  this.aoo[idx];}
}  
return false;
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
//--A forEach loop once starts will loop through all the array elements and can not be stopped by return.

searchAnd(prop1,value1,prop2,value2){
for (let idx = 0; idx < this.aoo.length; idx++) {
  const e = this.aoo[idx];
  if( (e[prop1]==value1) && (e[prop2]==value2))
      {return e;}        
}  
return false;
}//
searchAndAll(prop1,value1,prop2,value2){
const final = [];  
for (let idx = 0; idx < this.aoo.length; idx++) {
  const e = this.aoo[idx];
  if( (e[prop1]==value1) && (e[prop2]==value2))
  {final.push(e);}  
}
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
findByIndex(index){//---------------????
if(index > this.aoo.length-1){
  return null;
} else{
  return this.aoo[index];
} 
}//getItem
// sortBySortOrder(){
// let sorted=    this.aoo.sort((a, b)=> {
//     const bandA = this.h.isSet(a.sortOrder,0)
//     const bandB = this.h.isSet(b.sortOrder,0)
//         let comparison = 0;
//         if (bandA > bandB) {
//           comparison = 1;
//         } else if (bandA < bandB) {
//           comparison = -1;
//         }
//         return comparison;
//       });
// return sorted;      
// }//sortBySortOrder
sort(overWrite = false,order="ASC"){
let sorted=    this.aoo.sort((a, b)=> {
    const bandA = a.sortOrder || 0;
    const bandB = b.sortOrder || 0;
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1; //-keep the same a .b
        } else if (bandA < bandB) {
          comparison = -1;//swap both from a-b to b-a
        }
        return comparison;//????
      });
//---array.sort ends      
          if(overWrite === true){
            this.aoo=sorted;   
            return sorted;      //actually return aoo
          } else{
            const newArray = 
            sorted.map(a => Object.assign({}, a));
            return newArray;      
          }     
}//sortBySortOrder
//-----------------------------------sort ends
push(a){
this.aoo.push(a);
return this.aoo;
}
get length(){
    return this.aoo.length;
}
// getNext(item){
// let isLast = this.isLast(item.id);    
// if(isLast == false){
// let itemIndex = this.idToIndex(item.id);
// return this.aoo[itemIndex+1];
// }else{return false;}    
// }//fn
/**take its own aoo(arr of obj not aoo class) and not the this.aoo */
// getPrevious(item){
// let isFirst = this.isFirst(item.id);    
// if(isFirst == false){
// let itemIndex = this.idToIndex(item.id);
// return this.aoo[itemIndex-1];
// }else{return false;}    
// }
setValueAll(property,value){
let arr=[];
this.aoo.forEach(e => {
    e[property] = value;
});
}    

sortByProperty(property,overWrite=false,order="ASC"){
let sorted=    this.aoo.sort((a, b)=> {
    const bandA = a[property] || 0 ;
    const bandB = b[property] || 0;
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      });
////...................................
//---array.sort ends      
if(overWrite === true){
  this.aoo=sorted;   
  return sorted;      //actually return aoo
} else{
  const newArray = 
  sorted.map(a => Object.assign({}, a));
  return newArray;      
}     
////...................................
}//sortBySortOrder        
//..............................................
delete(itemOrId){
///this can be an id or an item  
if(typeof itemOrId == 'object'){
  this.aoo = this.aoo.filter(i=> i.id !== itemOrId.id);
}else if(typeof itemOrId == 'number') {
  this.aoo = this.aoo.filter(i=> i.id !== itemOrId);
}
}
newId(){
if(this.debugMode === true){
  return this.debugIdCounter++;
}else{
  return this.uuid();
}
}
uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
}//class ends    

/** the is no findParent function since findParent  = 
 * find(parentId)
 * 
 */
