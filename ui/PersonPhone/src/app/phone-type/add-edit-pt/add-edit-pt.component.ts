import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pt',
  templateUrl: './add-edit-pt.component.html',
  styleUrls: ['./add-edit-pt.component.css']
})
export class AddEditPtComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() pt:any;
  PhoneNumberTypeID=0;
  Name="";


  ngOnInit(): void {
    this.PhoneNumberTypeID=this.pt.PhoneNumberTypeID;
    this.Name=this.pt.Name;
  }

  addPhoneType(){
    var val = {PhoneNumberTypeID:this.PhoneNumberTypeID,
              Name:this.Name};

    this.service.addPhoneNumberType(val).subscribe(res=>
      alert(res.toString()));
    }

  updatePhoneType(){
    var val = {PhoneNumberTypeID:this.PhoneNumberTypeID,
               Name:this.Name};

    this.service.updatePhoneNumberType(val).subscribe(res=>
    alert(res.toString()));

  }

}
