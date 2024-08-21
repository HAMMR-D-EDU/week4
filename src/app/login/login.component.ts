import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; // Importing FormsModule to use ngModel for two-way data binding
import { Router } from '@angular/router'; // Importing Router to navigate between routes

@Component({
  selector: 'app-login', 
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './login.component.html', 
  styleUrl: './login.component.css' 
})
export class LoginComponent {
  

  listUsers = [
    {username: 'keyaan', password: '1234'}, 
    {username: 's5301321@griffithuni.edu.au', password: '4321'}, 
    {username: 's5301322@griffithuni.edu.au', password: '1111'}
  ];

  // Variables to hold the user's input from the form
  username = "";
  password = "";

  // router service for navigation
  constructor(private router: Router) {}

  // for login button
  itemClicked() {
    console.log(this.username, this.password); // Logs the entered username and password to the console
    // Creates an object with the entered username and password
    let c = { username: this.username, password: this.password };
    // Checks if any user in the list matches the entered username and password (c)
    let find = this.listUsers.some((e) => e.username === c.username && e.password === c.password);
    // If a matching user is found, navigate to the /account route
    if (find) {
      this.router.navigateByUrl('/account');
    }
  }
  
}