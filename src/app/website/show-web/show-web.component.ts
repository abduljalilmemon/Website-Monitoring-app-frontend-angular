import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-web',
  templateUrl: './show-web.component.html',
  styleUrls: ['./show-web.component.css']
})
export class ShowWebComponent implements OnInit {

  constructor(private service:SharedService) { }
  modalTitle = '';
  ActivateAddEditWebComp:boolean=false;
  toggleNavbar = false;
  websiteList:any=[];
  web = {};

  ngOnInit(): void {
    this.refreshWebList();
  }

  addClick(){
    this.web={
      WebsiteName:'', 
      WebsiteUrl:''
    }
    this.modalTitle = 'Add Website';
    this.ActivateAddEditWebComp = true;
  }

  editClick(item:any){
    this.web = item
    this.modalTitle = 'Update'
    this.ActivateAddEditWebComp = true
  }

  deleteClick(item:any){
    console.log(item)
    
    if(confirm('Are you sure?')){
      this.service.deleteWebsite(item).subscribe(res=>{
        alert(res.toString())
        this.refreshWebList()
      })
    }
  }

  refreshWebList(){
    this.service.getWebsiteList().subscribe(data=>{
      this.websiteList=data;
    })
  }

}
