import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NativeStorage} from '@ionic-native/native-storage/ngx'
import {Dialogs} from '@ionic-native/dialogs/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isenabled:boolean
  name:string
  items:any
  data:any
  scroll(el:HTMLElement){
    el.scrollIntoView({behavior:"smooth"})
  }
  constructor(private r:Router,private ns:NativeStorage,private dialogs:Dialogs){}

ngOnInit(){
  this.items=[]
this.isenabled=false
this.name="add"
this.ns.getItem('todos').then((data)=>{
this.items=data.items
this.data=[]
})

}
open(){
  this.isenabled=!this.isenabled
  if(this.isenabled==true){
  this.name="close"
}
  if(this.isenabled==false){
    this.name="add"
  }
}
add(title){
  let isthere=false;
    for(var i=0;i<this.items.length;i++){
      if(this.items[i]==title || title==''){
        isthere=true;
        this.dialogs.alert('Todo already exists',"Alert").then(()=>{
          console.log('success')
        })
      }

      
    }
    
    if(!isthere){
      this.items.unshift(title)
      this.ns.setItem('todos',{items:this.items}).then(()=>{
        console.log('success')
      })
      
    }
}
delete(i){

    this.items.forEach( (item, index) => {
      if(item === i) this.items.splice(index,1);
      
      
    })
    this.ns.setItem('todos',{items:this.items}).then(()=>{
      console.log('deleted')
    })
  
}
}
