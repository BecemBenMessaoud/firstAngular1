import { Component, OnInit } from '@angular/core';
import { Produit} from "../model/produit";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newProduit = new Produit()
  constructor() { }
addProduit(){
  console.log(this.newProduit);
}
  ngOnInit(): void {
  }

}
