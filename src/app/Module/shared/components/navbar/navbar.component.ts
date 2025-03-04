import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router:Router){}

  currentSection:any;
  isNavbarContentOpen:any;

// opennav bar section code
  openNavbarContent(section:any){
    this.isNavbarContentOpen=true;
    this.currentSection=section;

  }
//close nav bar section
  closeNavbarContent(){
    this.isNavbarContentOpen=false;
  }

  navigateTo(path:any){
    this.router.navigate([path])

  }

  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer = document.querySelector(".modal-container");
    const openbutton=document.querySelectorAll(".open-button");
//button logic clicked
    let clickInsideButton=false;

    openbutton.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true
      }

    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }

  }



}
