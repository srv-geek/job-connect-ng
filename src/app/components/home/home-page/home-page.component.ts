import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
     const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target')!;
      const count = +counter.innerHTML;
      const increment = target / 200;

      if (count < target) {
        counter.innerHTML = `${Math.ceil(count + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerHTML = `${target}`;
      }
    };
    updateCounter();
  });
  }

}
