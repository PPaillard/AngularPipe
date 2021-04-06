import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // Produits est un tableau d'objet qui contient 3 objets
  // Chaque objet contient un ID, un nom, un prix & une description
  produits = [
    {
      id:1,
      nom: "super Produit",
      prix: 14.99,
      description: "Incroyable produit !"
    },
    {
      id:2,
      nom: "autre Produit",
      prix: 20.99,
      description: "Super produit !"
    },
    {
      id:3,
      nom: "3eme Produit",
      prix: 14.99,
      description: "géééénial produit !"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
