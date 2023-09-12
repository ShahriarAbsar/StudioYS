import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { backUrl } from 'src/datas';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent {
  title!: string;
  description!: string;
  category!: string;
  file!: File;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onSubmit() {
    console.log(this.title, this.description, this.category, this.file);
    const formData: FormData = new FormData();
    formData.append('vid', this.file);
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('category', this.category);

    // fetch(`${backUrl}projects`, {
    //   body: formData,
    //   method: 'POST'
    // })
    
    this.http.post(`${backUrl}projects`, formData).subscribe(resp => console.log(resp));
  }
}
