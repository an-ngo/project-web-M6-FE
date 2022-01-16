import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectFile: any;
  ref: any;
  imageUrl: string = '';
  content: any;

  constructor(private storage: AngularFireStorage, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public register(registerForm: any): void {
    registerForm.value.avatar = this.imageUrl;
    this.authService.register(registerForm.value).subscribe((data) => {
      this.content = data;
      console.log(this.content);
    });
  }
  public uploadAvatar(event: any): void {
    this.selectFile = event.target.files[0];
    console.log(this.selectFile);
    this.onload();
  }
  public onload(): void {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(id);
    this.ref.put(this.selectFile).then((snapshot: any) => {
      return snapshot.ref.getDownloadURL();
    }).then((downloadURL: any) => {
      this.imageUrl = downloadURL;
    })
  }
}
