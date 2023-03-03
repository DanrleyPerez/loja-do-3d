import { Produto } from "./Produto";


let listaProdutos: Produto[];

listaProdutos = [
    {name : 'Batman',
     description: 'Batman Busto 13 centimetros',
     category: 'Busto',
     image:'batman.webp',
     price: 90,
     inventoryStatus:'OUTOFSTOCK',
     imageUrl: './assets/batman'
    },
    {
    name : 'Kratos',
     description: 'Kratos 23 centimetros',
     category: 'ActionFigures',
     image:'goku-azul.png',
     price: 90,
     inventoryStatus:'OUTOFSTOCK',
     imageUrl: './assets/batman'

    },

]

export default listaProdutos;