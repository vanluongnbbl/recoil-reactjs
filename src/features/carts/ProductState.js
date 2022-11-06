import { atom } from "recoil";

export const productListState = atom({
    key: 'productList',
    default: [
        { id: 1, price: 15, title: 'Male Tshirt'},
        { id: 2, price: 20, title: 'Female Tshirt'},
        { id: 3, price: 25, title: 'Male Tshirt'},
    ]
})

