export function selectById(doc){
    //................................    
    let final=false;
    this.doc.nodes.aoo.forEach(e => {
        if(e.id===id){
            e.selected=true;
        }
    });
      return final;
    }