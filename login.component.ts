import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelsServiceService } from 'src/app/service/travels-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  username: string = '';
  password: string = '';

  constructor(private travelService: TravelsServiceService, private router: Router) {}

  onLogin() {
    const loginData = { userName: this.username, password: this.password };

    this.travelService.loginUser(loginData).subscribe(
      (response) => {
        alert('Login successful');
        console.log(response);
        this.router.navigate(['/dashboard']); // Navigate to the dashboard or any page
      },
      (error) => {
        alert('Invalid username or password');
        console.error(error);
      }
    );
  }


}
