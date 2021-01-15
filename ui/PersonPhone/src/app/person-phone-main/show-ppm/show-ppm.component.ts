import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ppm',
  templateUrl: './show-ppm.component.html',
  styleUrls: ['./show-ppm.component.css']
})
export class ShowPpmComponent implements OnInit {

  constructor(private service:SharedService) { }

  PersonPhoneList:any=[];

  ModalTitle:string="";
  ActivateAddEditPPMComp:boolean=false;
  ppm:any;
  ngOnInit(): void {
    this.refreshPPList();
  }
  
  addClick(){

    this.ppm={

      BusinessEntityID:0,
      PhoneNumber:"",
      PhoneNumberID:0

    }

    this.ModalTitle = "Add PersonPhone"; 
    this.ActivateAddEditPPMComp = true;

  }

  editClick(item: any){
    this.ppm=item;
    this.ModalTitle = "Edit PersonPhone";
    this.ActivateAddEditPPMComp = true;

  }

  deleteClick(item:any){
    if(confirm('Are you sure?')){
      this.service.deletePersonPhone(item.BusinessEntityID).subscribe(data=>{
        alert(data.toString());
        this.refreshPPList();
      });
    }
  }

  closeClick(){

   this.ActivateAddEditPPMComp = false; 
   this.refreshPPList();
   
  }

  refreshPPList(){
    this.service.getPersonPhoneList().subscribe(data=>{
      this.PersonPhoneList=data;
    });
  }

}