import {Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  DoCheck,
  OnInit} from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements DoCheck, OnInit{
  @Input() product!: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(){
    console.log('1.constructor');
  }
  // ngOnChanges(changes:SimpleChanges){
  //   console.log('2.ngOnChanges');
  //   console.log(changes);
  // }
  ngOnInit(): void{
    console.log('3.ngOnInit');
  }
  ngDoCheck(): void{
    console.log('4.doCheck');
  }
  addCart(): void{
  console.log('add a cart');
  this.productClicked.emit(this.product.id);
}
}
