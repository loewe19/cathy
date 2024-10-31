/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
// Objet LignePanier
function LignePanier(code, qte, prix) {
  this.codeArticle = code;
  this.qteArticle = qte;
  this.prixArticle = prix;
  
  this.ajouterQte = function(qte) {
      this.qteArticle += qte;
  };
  
  this.getPrixLigne = function() {
      return this.prixArticle * this.qteArticle;
  };
}

// Objet Panier
function Panier() {
  this.liste = [];
  
  this.ajouterArticle = function(code, qte, prix) {
      var index = this.getArticle(code);
      if (index === -1) {
          this.liste.push(new LignePanier(code, qte, prix));
      } else {
          this.liste[index].ajouterQte(qte);
      }
  };
  
  this.getArticle = function(code) {
      for (var i = 0; i < this.liste.length; i++) {
          if (this.liste[i].codeArticle === code) {
              return i;
          }
      }
      return -1; // Article non trouvé
  };
  
  this.getTotal = function() {
      var total = 0;
      for (var i = 0; i < this.liste.length; i++) {
          total += this.liste[i].getPrixLigne();
      }
      return total;
  };
}

// Exemple d'utilisation
var monPanier = new Panier();
monPanier.ajouterArticle("001", 2, 10.00); // Ajoute 2 articles à 10.00 chacun
monPanier.ajouterArticle("002", 1, 15.00); // Ajoute 1 article à 15.00
console.log("Total du panier : " + monPanier.getTotal() + " €");