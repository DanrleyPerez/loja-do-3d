import { Produto } from "./Produto";


let listaProdutos: Produto[];

listaProdutos = [
    {
        name : 'Batman',
     description: 'Batman Busto 13 centimetros',
     category: 'Busto',
     image:'../../assets/batman.jpg',
     price: 90,
     inventoryStatus:'OUTOFSTOCK',
     imageUrl: 'batman',
	 quantity: 24,
	 rating: 5
    },
    {
    name : 'Goku',
     description: 'Goku 23 centimetros',
     category: 'ActionFigures',
     image:'../../assets/dragonball.jpg',
     price: 90,
     inventoryStatus:'OUTOFSTOCK',
     imageUrl: 'dragonball.jgp',
     quantity: 24,
	 rating: 5

    },
    {
     name : 'Kratos',
     description: 'Goku 23 centimetros',
     category: 'ActionFigures',
     image:'../../assets/kratos.jpg',
     price: 90,
     inventoryStatus:'OUTOFSTOCK',
     imageUrl: 'kratos.jgp',
     quantity: 24,
	 rating: 5
    
    },

    ]

export default listaProdutos;