import {default as axios} from "axios";

type Gender = "male" | "female";

type Role = "admin" | "moderator" | "user";

enum BloodGroup {
    "O-" = "0-",
    "O+" = "0+",
    "B+" = "B+",
    "AB+" = "AB+",
    "AB-" = "AB-",
    "A-" = "A-",
    "A+" = "A+",

}

enum EyeColor {
    GREEN = "Green",
    RED = "Red",
    BLUE = "Blue",
    HAZEL = "Hazel",
    AMBER = "Amber",
    BROWN = "Brown",
    VIOLET = "Violet",
    GRAY = "Gray",
}

enum HairColor {
    BROWN = "Brown",
    BLACK = "Black",
    GREEN = "Green",
    WHITE = "White",
    GRAY = "Gray",
    BLONDE = "Blonde",
    RED = "Red",
    PURPLE = "Purple",
    BLUE = "Blue",
}

enum HairType {
    CURLY = "Curly",
    STRAIGHT = "Straight",
    WAVY = "Wavy",
    KINKY = "Kinky",

}

enum CardType {
    DCI = "Diners Club International",
    JCB = "JCB",
    DISCOVER = "Discover",
    MASTERCARD = "Mastercard",
    VISA = "Visa",
    AE = "American Express",
    UNIONPAY = "UnionPay",

}

interface IHair {
    color: HairColor;
    type: HairType;
}

interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number, lng: number };
    country: string;
}

interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: CardType;
    currency: string;
    iban: string;
}

interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress;
}

interface ICrypto {
    coin: string;
    wallet: string;
    network: string;
}

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number,
    gender: Gender;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: BloodGroup;
    height: number,
    weight: number,
    eyeColor: EyeColor;
    hair: IHair,
    ip: string;
    address: IAddress,
    macAddress: string;
    university: string;
    bank: IBank,
    company: ICompany,
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto,
    role: Role
}

interface IData {
    users: IUser[],
    total: number;
    skip: number;
    limit: number;
}

await axios.get('https://dummyjson.com/users').then(({data}): IData => data).catch((err: unknown) => {
    if(err instanceof Error){
        console.log(err)
    }
});
