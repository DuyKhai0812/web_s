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
    
    this.search_ques(0)
    this.changes()
  }
  fromProducter !:FormGroup;
  show: string = "No";
  testt:any = 
  [
    {id:1,ques:"1 + 1 = ?",ans : {a : 2,b: 3,c: 4,d: 5},answer: "a",your_ans:"None"},
    {id:2,ques:"2 + 2 = ?",ans : {a : 2,b: 3,c: 4,d: 5},answer: "c",your_ans:"None"},
    {id:3,ques:"Nước nào là châu á",ans : {a : "Việt Nam",b: "Mỹ",c: "Anh",d: "Cả 3 đều sai"},answer: "a",your_ans:"None"},
    {id:4,ques:"Bác Hồ đọc tuyên ngôn độc lập vào ngày nào",ans : {a : "2/8",b: "2/9",c: "2/10",d: "2/11"},answer: "b",your_ans:"None"}
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
  color :string = "white";
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
    
    


  }
  a:any
  point:number = 0;
  dis: boolean = false;
  dis2: boolean = true;
  check : boolean =true;
  uncheck : boolean =true;
  
  onSubmit()
  {
    this.array.sort(function(sv1:any, sv2:any) {
      return sv1.id_ans - sv2.id_ans;
    });
    
    for(let i = 0;i < this.array.length;i++)
    {
      if(this.array[i].ans == this.testt[i].answer)
      {
        let divi = 100 / this.array.length;
        this.point = this.point + divi;
        this.dis = true;
        //this.dis2 = false;
      }
    }
  }
  item:any = [];
  search_ques(id:any){
    this.item = this.testt[id];
  }
  num:any = []
  btcheck: boolean = true;
  changes(){
    if(this.array.length == this.testt.length)
    {
      this.btcheck = false
    }
    else
    {
      this.btcheck = true
    }
    for(let i = 0;i < this.testt.length;i++)
    {
      let find = this.array.findIndex((item:any)=>item.id_ans == i + 1)
      if(find == -1)
      {
        let findnum = this.array.findIndex((item:any)=>item.id == i + 1)
        if(findnum == -1)
        {
          let JSON = {id:this.testt[i].id,click:0}
          this.num.push(JSON) 
        }   
        else
        {
          this.num.filter((x:any) => [i + 1].indexOf(x.id) >= 0).forEach((x:any) => x.click = 1)
        }
      }
      else
      {
        this.num.filter((x:any) => [i + 1].indexOf(x.id) >= 0).forEach((x:any) => x.click = 1)
      }
      //console.log(this.num)
    }
    //console.log(this.array)
    //console.log(this.testt[0].id)
  }
  time:number = 30;
  
  //Dùng mảng để so sánh 
  //npm install ngx-countdown --save
  count:any;
  tt(a:any){
    this.count = setInterval(()=>{
      if(a.i.value == 0){
        this.dis = true;
        this.rt.navigate(['t']);
        clearInterval(this.count)
      }
    },this.time*1000/2)
  }
  
}
