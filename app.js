"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Встроенные данные о пользователях в виде кортежей
const users = [
    ["Алексей", 28, true],
    ["Мария", 34, false],
    ["Дмитрий", 22, true],
    ["Елена", 31, true]
];
for (const user of users) {
    console.log(`Пользователь: ${user[0]}, Возраст: ${user[1]}, Активен: ${user[2]}`);
}
//# sourceMappingURL=app.js.map