import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  handleFileInput(event) {
    
	  let file: File = event.target.files[0] as File;
    
    this.fileupload.postFile(file).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
      
  }

  constructor(private fileupload: FileUploadService) { }

  ngOnInit(): void {
  }

}
