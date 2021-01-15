import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ppm',
  templateUrl: './add-edit-ppm.component.html',
  styleUrls: ['./add-edit-ppm.component.css']
})
export class AddEditPpmComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ppm:any;
  BusinessEntityID=0;
  PhoneNumber="";
  PhoneNumberID=0;


  ngOnInit(): void {
    this.BusinessEntityID=this.ppm.BusinessEntityID;
    this.PhoneNumber=this.ppm.PhoneNumber;
    this.PhoneNumberID=this.PhoneNumberID;
  }

  addPersonPhone(){
    var val = {BusinessEntityID:this.BusinessEntityID,
               PhoneNumber:this.PhoneNumber,
               PhoneNumberID:this.PhoneNumberID};

    this.service.addPersonPhone(val).subscribe(res=>
      alert(res.toString()));

    this.service.addPhoneNumberType(val).subscribe(res=>
      alert(res.toString()));

    }

  updatePersonPhone(){
    var val = {BusinessEntityID:this.BusinessEntityID,
      PhoneNumber:this.PhoneNumber,
      PhoneNumberID:this.PhoneNumberID};

    this.service.updatePersonPhone(val).subscribe(res=>
    alert(res.toString()));
  }

}
