import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pt',
  templateUrl: './show-pt.component.html',
  styleUrls: ['./show-pt.component.css']
})
export class ShowPtComponent implements OnInit {

  constructor(private service:SharedService) { }

  PhoneTypeList:any=[];

  ModalTitle:string="";
  ActivateAddEditPTComp:boolean=false;
  pt:any;
  ngOnInit(): void {
    this.refreshPTList();
  }

  addClick(){

    this.pt={

      PhoneNumberTypeID:0,
      Name:""

    }

    this.ModalTitle = "Add PhoneNumberType";
    this.ActivateAddEditPTComp = true;

  }

  editClick(item: any){
    this.pt=item;
    this.ModalTitle = "Edit PhoneNumberType";
    this.ActivateAddEditPTComp = true;

  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deletePhoneNumberType(item.PhoneNumberTypeID).subscribe(data=>{
        alert(data.toString());
        this.refreshPTList();
      });
    }

  }

  closeClick(){

   this.ActivateAddEditPTComp = false; 
   this.refreshPTList();
   
  }

  refreshPTList(){
    this.service.getPersonPhoneList().subscribe(data=>{
      this.PhoneTypeList=data;
    });
  }

}
