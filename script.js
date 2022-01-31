/*let coisasSobreMim = {
    altura: 1.63,
    corFavorita: "preto",
    frutaFavorita: "pitaia"
}

coisasSobreMim.esporte = "futebol"

delete coisasSobreMim.corFavorita

console.log(coisasSobreMim)*/


let cadastro = [
    {
       nome: "Andrêina",
       idade: 21,
       telefone: 71996495133,
       amigos: ["Larissa", "Barbara", "Bianca", "Ghislain"]
   },
   {
       nome: "Larissa",
       idade: 24,
       telefone: 7193872637,
       amigos: ["Luiza", "Arthur", "Tati", "Ghislain"]  
   },
   {
       nome: "Bianca",
       idade: 22,
       telefone: 7589536232,
       amigos: ["Gabriel", "Samuel", "Andrêina", "Ghislain"]
   },
   {
       nome: "Barbara",
       idade: 25,
       telefone: 7482915935,
       amigos: ["Felipe", "Andrêina", "Pam", "Daniel"]
   },
   {
       Nome: "Ghislain",
       idade: 26,
       telefone: 1748374859,
       amigos: ["Jeferson", "Marlon", "Bianca", "Barbara"]
   }
]
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[3])