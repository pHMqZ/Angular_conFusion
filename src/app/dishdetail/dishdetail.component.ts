import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish = new Dish;

  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location) {
    
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id).subscribe(dish => this.dish=dish);
  }

  goBack(): void{
    this.location.back();
  }

}
