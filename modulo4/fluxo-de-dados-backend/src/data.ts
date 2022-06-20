export type Product ={
   id:number | string,
   name:string,
   price:number
}

export const products: Product[] = [
   {
      id:1,
      name:"maçã",
      price: 10
   },
   {
      id:2,
      name:"banana",
      price:20,
   },
   {
      id:3,
      name:"manga",
      price:30,
   }

]