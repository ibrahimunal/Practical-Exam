import { Component } from '@angular/core';
import { Button } from 'src/models/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam';

  manualXCoordinate : string = "";
  manualYCoordinate : string = "";
  selectedState = 1;
  yCoordinates : number[] = [4,3,2,1]
  xCoordinates : number[] = [1,2,3,4]

  buttonList : Button[] = [
    {x:1, y:1, set:false, content: 'OFF'},
    {x:1, y:2, set:false, content: 'OFF'},
    {x:1, y:3, set:false, content: 'OFF'},
    {x:1, y:4, set:false, content: 'OFF'},
    {x:2, y:1, set:false, content: 'OFF'},
    {x:2, y:2, set:false, content: 'OFF'},
    {x:2, y:3, set:false, content: 'OFF'},
    {x:2, y:4, set:false, content: 'OFF'},
    {x:3, y:1, set:false, content: 'OFF'},
    {x:3, y:2, set:false, content: 'OFF'},
    {x:3, y:3, set:false, content: 'OFF'},
    {x:3, y:4, set:false, content: 'OFF'},
    {x:4, y:1, set:false, content: 'OFF'},
    {x:4, y:2, set:false, content: 'OFF'},
    {x:4, y:3, set:false, content: 'OFF'},
    {x:4, y:4, set:false, content: 'OFF'},
  ]


  buttonClicked(){
    console.log("butonClicked")
  }

  filterItemsOfType(type:number){
    return this.buttonList.filter(item => item.y == type);
  }

  buttonToggle(x:number , y:number){
    // gets the index of x and y coordinates and locate the index in buttonList
    let selectedButton = this.buttonList.find(btn=>(btn.x == x && btn.y == y));
    let selectedButtonIndex = this.buttonList.findIndex(btn=>(btn.x == x && btn.y == y));
    if(selectedButton?.set == false){
      this.buttonList[selectedButtonIndex].set=true;
      this.buttonList[selectedButtonIndex].content="ON"
    }else{
      this.buttonList[selectedButtonIndex].set=false;
      this.buttonList[selectedButtonIndex].content="OFF"
    }
  }

  setCoordinate(){
    console.log("you set the coordinate " + this.manualXCoordinate , this.manualYCoordinate)
    let manualButtonIndex = this.buttonList.findIndex(btn=>(btn.x == Number(this.manualXCoordinate) && btn.y == Number(this.manualYCoordinate)));
    console.log(manualButtonIndex)
    if(manualButtonIndex != -1 ){
      if(this.selectedState == 1){
        this.buttonList[manualButtonIndex].set=true;
        this.buttonList[manualButtonIndex].content ="ON";
      }else{
        this.buttonList[manualButtonIndex].set=false;
        this.buttonList[manualButtonIndex].content ="OFF";
      }
    }else{
      alert("Range must be between 1 and 4 !! ")
    }
    this.manualXCoordinate = ""
    this.manualYCoordinate = ""
  }

  setValue(){
    console.log(this.selectedState);
  }

  resetButtons(){
    this.buttonList.forEach(item=>{item.set=false , item.content = "OFF"})
  }
}
