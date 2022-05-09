import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thufiles',
  templateUrl: './thufiles.component.html',
  styleUrls: ['./thufiles.component.css']
})
export class ThufilesComponent implements OnInit {

  constructor(private fromBD:FormBuilder,private rt:Router) {this.innit()}

  ngOnInit(): void {
    console.log(this.testt[1].ans.a)
  }
  fromProducter !:FormGroup;
  show: string = "No";
  testt:any = 
  [
    {id:1,ques:"1 + 1 = ?",ans : {a : 2,b: 3,c: 4,d: 5},answer: "a",your_ans:"None"},
    {id:2,ques:"2 + 2 = ?",ans : {a : 2,b: 3,c: 4,d: 5},answer: "c",your_ans:"None"},
    {id:3,ques:"Nước nào là châu á",ans : {a : "Việt Nam",b: "Mỹ",c: "Anh",d: "Cả 3 đều sai"},answer: "a",your_ans:"None"}
  ]
  numberr : Number = 0;
  innit(){
    this.fromProducter = this.fromBD.group(
      {
        answer : this.fromBD.array(
          [
            new FormControl('id'),
            new FormControl('answer')
          ])
      }
    );
  }
  array :any = []
  submit(answerr:string,id:number,i:number){
    let find = this.array.findIndex((item:any)=>item.id_ans == id)
    if(find == -1)
    {
      let JSON = {id_ans:id,ans:answerr}
      this.array.push(JSON)
    }
    else
    {
      this.array.filter((x:any) => [id].indexOf(x.id_ans) >= 0).forEach((x:any) => x.ans = answerr)
    }
    console.log(find)
    
    console.log(this.array)

  }
  a:any
  point:number = 0;
  dis: boolean = false;
  dis2: boolean = true;
  onSubmit()
  {
    alert(this.array.length)
    for(let i = 0;i < this.array.length;i++)
    {
      if(this.array[i].ans == this.testt[i].answer)
      {
        let divi = 100 / this.array.length;
        this.point = this.point + divi;
        this.dis = true;
        this.dis2 = false;
        
      }
    }
  }
  
}
