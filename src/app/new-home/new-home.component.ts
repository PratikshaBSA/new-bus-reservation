import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  control = new FormControl();

// <<<<<<< HEAD
//   source: String = "";
//   destination: String = "";
//   isStatus:Boolean=false;
//   constructor() { this.isStatus=Boolean(sessionStorage.getItem("status"));}
// =======
  source: String;
  destination: String;
  dateOfJourney:Date;

  constructor(private router:Router) { }

  ngOnInit() {
    var myIndex = 0;
    carousel();
    function carousel() {
      var i;
      var x;
      x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      try {
        x[myIndex - 1].style.display = "block";
      }
      catch {

      }
      finally {
        setTimeout(carousel, 2000); // Change image every 2 seconds
      }
    }
  }



  checkBus(searchBusForm:NgForm){
    if(this.source===this.destination){
      alert("Source and Destination cannot be same or empty!");
    }
    else if(searchBusForm.valid){

      localStorage.setItem("source",this.source.toString());
      localStorage.setItem("destination",this.destination.toString());
      localStorage.setItem("dateOfJourney",this.dateOfJourney.toString());
      this.router.navigate(['searchBus']); 
    }
    else{
      alert("Enter valid infomation");
    }

  }

 
}


