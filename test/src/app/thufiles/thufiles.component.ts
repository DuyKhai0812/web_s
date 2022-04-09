import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thufiles',
  templateUrl: './thufiles.component.html',
  styleUrls: ['./thufiles.component.css']
})
export class ThufilesComponent implements OnInit {

  constructor(private fromBD:FormBuilder,) { this.initFrom()}

  ngOnInit(): void {
    console.log(this.testt)
  }
  fromProducter !:FormGroup;
  testt:any = 
  [
    {id:1,ques:"1 + 1 = ?",a : 2,b: 3,c: 4,d: 5,answer: "a"},
    {id:2,ques:"2 + 2 = ?",a : 2,b: 3,c: 4,d: 5,answer: "c"}
  ]
  initFrom()
  {
    this.fromProducter = this.fromBD.group
    (
      {
        answer: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      }
    )
  }
  dap_an : string = "";
  tra_loi : string = "";
  point: number = 0;
  onSubmit(a:number)
  {
    console.log(this.fromProducter.value.answer)
    console.log(this.testt[a].answer)
    this.tra_loi = this.fromProducter.value.answer;
    this.dap_an = this.testt[a].answer;
    if(this.tra_loi == this.dap_an)
    {
      alert("Đúng")
      this.point +=1;
    }
    else
    {
      alert("Sai")
      if(this.point <= 0)
        this.point -=0;
      else
        this.point -=1;
    }
  }


}
