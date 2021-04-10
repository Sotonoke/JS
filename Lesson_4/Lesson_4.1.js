
function numObj(n) {
    if (n < 0 || n > 999 || typeof n !== "number") {
        console.log("Неверное число. Введите число от 0 до 999.");
    } else {
        let str = n.toString();
        let obj = {};
        let l = str.length;
        switch (l) {
            case 3:
                obj["Сотни"] = str[l - 3];
            case 2:
                obj["Десятки"] = str[l - 2];
            case 1:
                obj["Единицы"] = str[l - 1];
        }
        return obj;
    }
}
console.log(numObj(444));