import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './documents.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  document;

  constructor(private rest: DocumentsService) { }

  title = "ImageViewerApp";
  
  image =  "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.document = "";
    this.rest.getDocuments().subscribe((data: {}) => {
      console.log(data);
      this.document = data;
    });
  }
}
