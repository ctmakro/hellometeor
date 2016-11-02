import { Template } from 'meteor/templating';

import { Blocks } from '../api/blocks.js';

import './body.html';

Template.body.helpers({
  getBlockArray(){
    return Blocks.find({pid:0})
    // .then(doc=>{
    //   return doc.blocks
    // })
  }
});

Template.blockTemplate.events({
  'click'(){
    Blocks.update(this._id,{
      $set:{state:1-this.state}
    })
  }
})

Template.blockTemplate.helpers({
  shouldLineBreak(pos){
    return (pos%6==0)
  },
  stateString(state){
    return state?'active':''
  }
})
