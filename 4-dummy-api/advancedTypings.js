import { default as axios } from "axios";
var BloodGroup;
(function (BloodGroup) {
    BloodGroup["O-"] = "0-";
    BloodGroup["O+"] = "0+";
    BloodGroup["B+"] = "B+";
    BloodGroup["AB+"] = "AB+";
    BloodGroup["AB-"] = "AB-";
    BloodGroup["A-"] = "A-";
    BloodGroup["A+"] = "A+";
})(BloodGroup || (BloodGroup = {}));
var EyeColor;
(function (EyeColor) {
    EyeColor["GREEN"] = "Green";
    EyeColor["RED"] = "Red";
    EyeColor["BLUE"] = "Blue";
    EyeColor["HAZEL"] = "Hazel";
    EyeColor["AMBER"] = "Amber";
    EyeColor["BROWN"] = "Brown";
    EyeColor["VIOLET"] = "Violet";
    EyeColor["GRAY"] = "Gray";
})(EyeColor || (EyeColor = {}));
var HairColor;
(function (HairColor) {
    HairColor["BROWN"] = "Brown";
    HairColor["BLACK"] = "Black";
    HairColor["GREEN"] = "Green";
    HairColor["WHITE"] = "White";
    HairColor["GRAY"] = "Gray";
    HairColor["BLONDE"] = "Blonde";
    HairColor["RED"] = "Red";
    HairColor["PURPLE"] = "Purple";
    HairColor["BLUE"] = "Blue";
})(HairColor || (HairColor = {}));
var HairType;
(function (HairType) {
    HairType["CURLY"] = "Curly";
    HairType["STRAIGHT"] = "Straight";
    HairType["WAVY"] = "Wavy";
    HairType["KINKY"] = "Kinky";
})(HairType || (HairType = {}));
var CardType;
(function (CardType) {
    CardType["DCI"] = "Diners Club International";
    CardType["JCB"] = "JCB";
    CardType["DISCOVER"] = "Discover";
    CardType["MASTERCARD"] = "Mastercard";
    CardType["VISA"] = "Visa";
    CardType["AE"] = "American Express";
    CardType["UNIONPAY"] = "UnionPay";
})(CardType || (CardType = {}));
await axios.get('https://dummyjson.com/users').then(({ data }) => data).catch((err) => {
    if (err instanceof Error) {
        console.log(err);
    }
});
//# sourceMappingURL=advancedTypings.js.map