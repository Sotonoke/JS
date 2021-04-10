'use strick';

const basket = {
    goods: [
        {
            id_product: 1,
            name: 'компьютер',
            price: 1000,
            quantity: 1
        },
        {
            id_product: 2,
            name: 'клавиатура',
            price: 1000,
            quantity: 2
        },
        {
            id_product: 3,
            name: 'телефон',
            price: 500,
            quantity: 11
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    findGoodById(id) {
        return this.goods.find((item) => item.id_product === id);
    }
};
console.log(basket.countBasketPrice());
console.log(basket.findGoodById(3))
