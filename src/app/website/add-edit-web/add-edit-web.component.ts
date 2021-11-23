import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-add-edit-web',
  templateUrl: './add-edit-web.component.html',
  styleUrls: ['./add-edit-web.component.css']
})
export class AddEditWebComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() web:any;
  @Output() myEvent = new EventEmitter();


  WebsiteName:string = '';
  WebsiteUrl:String = '';


  ngOnInit(): void {
    this.WebsiteName = this.web['name'];
    this.WebsiteUrl = this.web['URL'];
  }

  addWebsite(){
    var val = {name:this.WebsiteName,
      URL:this.WebsiteUrl}
    this.service.addWebsite(val).subscribe(res=>{
      alert(res.toString())
      this.myEvent.next()
    })
  }

  editWebsite(){
    var val = {name:this.WebsiteName,
      URL:this.WebsiteUrl,
      key:this.web['name']}
      this.service.updateWebsite(val).subscribe(res=>{
      alert(res.toString())
      this.myEvent.next()
    })
  }





}
