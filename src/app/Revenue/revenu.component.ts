import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-revenu',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './revenu.component.html',
})
export class RevenuComponent implements OnInit {
  revenu = {
    prixMale: null,
    prixFemelle: null,
    nbFemellesVendues: null,
    nbMalesVendus: null,
    dateVente: ''
  };

  ngOnInit(): void {
    // Date de la vente fixée automatiquement à aujourd'hui
    const today = new Date();
    this.revenu.dateVente = today.toISOString().split('T')[0]; // Format AAAA-MM-JJ
  }

  enregistrerRevenu() {
    console.log('Revenu enregistré :', this.revenu);
    // Ici, tu peux envoyer les données vers le backend si besoin
  }
}
