import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';
import { FileserviceService } from '../../services/fileservice.service';
//import { FileUploader } from 'ng2-file-upload';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload'
//import { FileSelectDirective } from 'ng2-file-upload';
@Component({
  selector: 'app-uploadlogo',
  templateUrl: './uploadlogo.component.html',
  styleUrls: ['./uploadlogo.component.css'],
  providers:[FileserviceService]
})
export class UploadlogoComponent implements OnInit {

  
  constructor(private FileService: FileserviceService) { }
  private files = [];
  private url = 'http://localhost:9008/upload';
  
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});

    this.FileService.showFileNames().subscribe(response => {
      for (let i = 0; i < response.json().length; i++) {
        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].contentType
        };
      }
    });
  }

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
      }
    );
  }
}
