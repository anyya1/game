const inventory = [];
const horse = [];
let room = "улица";

function showInventory() {
    if (inventory.length === 0) {
        alert("Рюкзак пуст.");
    } else {
        alert("В рюкзаке: " + inventory.join(", "));
    }
}

alert(
    "СОБЕРИСЬ НА ТРЕНИРОВКУ\n\n" +
    "вы пришли на тренировку по верховой езде.\n" +
    "найди тренера и он все вам скажет.\n"
);

while (true) {
    // УЛИЦА 
    if (room === "улица") {
        const choice = prompt(
            "ВЫ НА УЛИЦЕ\n" +
            "1 — В манеж \n" +
            "2 — В дом\n" +
            "3 — В конюшню\n" +
            "4 — Проверить рюкзак\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (!inventory.includes("лошадь")) {
                alert("Без лошади в манеже делать нечего.");
                room = "улица";
                continue;
            } else {
                room = "манеж";
            }
            room = "манеж";
        } else if (choice === "2") {
            room = "дом";
        } else if (choice === "3") {
            room = "конюшня";
        } else if (choice === "4") {
            showInventory();
        } else alert("Нет такого варианта.");
    }

    // ДОМ 
    else if (room === "дом") {
        const choice = prompt(
            "ДОМ\n" +
            "1 — Зайти в тренерскую\n" +
            "2 — Зайти в раздевалку\n" +
            "3 — Выйти на улицу\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) break;
        else if (choice === "1") room = "тренерская";
        else if (choice === "2") room = "раздевалка";
        else if (choice === "3") room = "улица";
        else alert("Нет такого варианта.");
    }

    // ТРЕНЕРСКАЯ 
    else if (room === "тренерская") {
        const choice = prompt(
            "ТРЕНЕРСКАЯ\n" +
            "1 – Поговорить с тренером\n" +
            "2 – Вернуться в дом\n" +
            "0 — Завершить игру"
        )
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("тренер")) {
                alert("вы уже знаете что вам делать, не отвлекай лишний раз");
            } else {
                const takeKey = confirm("поговорить с тренером?");
                if (takeKey === true) {
                    inventory.push("тренер");
                    alert(
                        "сегодня у тебя тренировка на лошади по кличке Кузя \n" +
                        "поседлай его и иди в манеж, я подойду чуть позже\n" +
                        "не забудь взять в раздевалке свой шлем и хлыст"
                    );
                } else {
                    alert("Вы оставили тренера в покое.\n" +
                        "но что вам делать?");
                }
            }
        } else if (choice === "2") {
            room = "дом";
        } else {
            alert("Такого действия нет.");
        }
    }

    // РАЗДЕВАЛКА 
    else if (room === "раздевалка") {
        const choice = prompt(
            "РАЗДЕВАЛКА\n" +
            "В рездевалке вы подходите к своей полке\n" +
            "1 — Взять шлем\n" +
            "2 — Взять хлыст\n" +
            "3 — Вернуться в дом\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("шлем")) {
                alert("вы уже взяли шлем.");
            } else {
                const takeKey = confirm("На полке вы нашли свой шлем. Взять его?");

                if (takeKey === true) {
                    inventory.push("шлем");
                    alert("вы одели шлем!");
                } else {
                    alert("Вы оставили шлем на полке.");
                }
            }
        } else if (choice === "2") {
            if (inventory.includes("хлыст")) {
                alert("вы уже взяли хлыст.");
            } else {
                const takeKey = confirm("На полке вы нашли свой хлыст. Взять его?");

                if (takeKey === true) {
                    inventory.push("хлыст");
                    alert("вы взяли хлыст!");
                } else {
                    alert("Вы оставили хлыст на полке.");
                }
            }
        } else if (choice === "3") {
            room = "дом";
        } else {
            alert("Такого действия нет.");
        }

    }

    // КОНЮШНЯ
    else if (room === "конюшня") {
        const choice = prompt(
            "КОНЮШНЯ\n" +
            "1 — Зайти в амуничник\n" +
            "2 — Зайти в кормовую\n" +
            "3 — Выйти на улицу\n" +
            "4 — Зайти в денник к Кузе\n" +
            "5 — Зайти в денник к Феде\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            room = "амуничник";
        } else if (choice === "2") {
            room = "кормовая";
        } else if (choice === "3") {
            room = "улица";
        } else if (choice === "4") {
            room = "денник Кузи";
        } else if (choice === "5") {
            room = "денник Феди";
        } else {
            alert("Такого действия нет.");
        }

    }
    // АМУНИЧНИК 
    if (room === "амуничник") {
        const choice = prompt(
            "АМУНИЧНИК\n" +
            "В амуничнике вы находите вашу стойку \n" +
            "1 — Вернуться в конюшню\n" +
            "2 — Взять седло\n" +
            "3 — Взять подпругу\n" +
            "4 — Взять вальтрап\n" +
            "5 — Взять уздечку\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "2") {
            if (inventory.includes("седло")) {
                alert("Вы уже взяли седло");
            } else {
                const takeKey = confirm("На стойке весит седло. Взять его?");

                if (takeKey === true) {
                    inventory.push("седло");
                    alert("Вы взяли седло");
                } else {
                    alert("Вы оставили седло на стойке");
                }
            }
        } else if (choice === "3") {
            if (inventory.includes("подпруга")) {
                alert("Вы уже взяли подпругу");
            } else {
                const takeKey = confirm("На стойке весит подпруга. Взять ее?");

                if (takeKey === true) {
                    inventory.push("подпруга");
                    alert("Вы взяли подпругу");
                } else {
                    alert("Вы оставили подпругу на стойке");
                }
            }
        } else if (choice === "4") {
            if (inventory.includes("вальтрап")) {
                alert("Вы уже взяли вальтрап");
            } else {
                const takeKey = confirm("На стойке весит вальтрап. Взять его?");

                if (takeKey === true) {
                    inventory.push("вальтрап");
                    alert("Вы взяли вальтрап");
                } else {
                    alert("Вы оставили вальтрап на стойке");
                }
            }
        } else if (choice === "5") {
            if (inventory.includes("уздечка")) {
                alert("Вы уже взяли уздечку");
            } else {
                const takeKey = confirm("На стойке весит уздечка. Взять ее?");

                if (takeKey === true) {
                    inventory.push("уздечка");
                    alert("Вы повесили уздечку на плечо");
                } else {
                    alert("Вы оставили уздечку на стойке");
                }
            }
        } else if (choice === "1") {
            room = "конюшня";
        } else {
            alert("Такого действия нет.");
        }
    }
    // КОРМОВАЯ (ВЗЯТЬ МОРКОВЬ)
    else if (room === "кормовая") {
        const choice = prompt(
            "КОРМОВАЯ\n" +
            "Вы заходите в кормовую и встречаете там конюха.\n" +
            "–Здравствуйте, вам нужна морковка для лошади?.\n" +
            "1 — Поздороваться в ответ и взять морковку\n" +
            "2 — проигнорировать и молча взять морковку\n" +
            "3 — Вернуться в конюшню\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "1") {
            if (inventory.includes("морковь")) {
                alert("Вы уже взяли морковку");
            } else {
                const takeKey = confirm("В корзине лежит морковка. Взять ее?");

                if (takeKey === true) {
                    inventory.push("морковь");
                    alert("Вы положили морковку в карман");
                } else {
                    alert("Вы оставили морковку в корзине");
                }
            }
        } else if (choice === "2") {
            alert("ты повел себя грубо, конюх пожаловался трениру и вас наказали")
            break
        } else if (choice === "3") {
            room = "конюшня";
        } else {
            alert("Такого действия нет.");
        }

    }
    // ДЕННИК
    else if (room === "денник Кузи") {
        const choice = prompt(
            "ДЕННИК КУЗИ\n" +
            "1 — Вывести Кузю из денника\n" +
            "2 — Поседлать Кузю\n" +
            "3 — Выйти в конюшню\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "3") {
            room = "конюшня";
        } else if (choice === "1") {
            if (inventory.includes("лошадь")) {
                alert("Вы уже вывели Кузю");
            } else {
                const takeKey = confirm("Кузя спокойно жует сено. Вывести?");

                if (takeKey === true) {
                    inventory.push("лошадь");
                    alert("Вы выводите Кузю из денника");
                    room = "конюшня"
                } else {
                    alert("Вы оставили его жевать сено");
                }
            }

        } else if (choice === "2") {
            const choice = prompt(
                "1 — надеть уздечку\n" +
                "2 — надеть вальтрап\n" +
                "3 — надеть седло\n" +
                "4 — надеть подпругу"
            );
            if (choice === "1") {
                if (horse.includes("уздечка")) {
                    alert("Вы уже надели уздеку");
                } else {
                    if (inventory.includes("уздечка")) {
                        horse.push("уздечка")  
                        inventory.splice(inventory.indexOf("уздечка"), 1);
                        alert("вы надели уздечку")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    } else {
                        alert("для начала возьмите уздечку")
                    }
                }
            }else if (choice === "2") {
                if (horse.includes("вальтрап")) {
                    alert("Вы уже надели вальтрап");
                } else {
                    if (inventory.includes("вальтрап")) {
                        horse.push("вальтрап")  
                        inventory.splice(inventory.indexOf("вальтрап"), 1);
                        alert("вы надели вальтрап")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    } else {
                        alert("для начала возьмите вальтрап")
                    }
                }
            }else if (choice === "3") {
                if (horse.includes("седло")) {
                    alert("Вы уже надели седло");
                } else {
                    if (inventory.includes("седло")) {
                        horse.push("седло")  
                        inventory.splice(inventory.indexOf("седло"), 1);
                        alert("вы надели седло")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    } else {
                        alert("для начала возьмите седло")
                    }
                }
            }else if (choice === "2") {
                if (horse.includes("подпруга")) {
                    alert("Вы уже надели подпругу");
                } else {
                    if (inventory.includes("подпруга")) {
                        horse.push("подпруга")  
                        inventory.splice(inventory.indexOf("подпруга"), 1);
                        alert("вы надели подпругу")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    } else {
                        alert("для начала возьмите подпругу")
                    }
                }
            }


        } else {
            alert("Такого действия нет.");
        }
    }


    else if (room === "денник Феди") {
        const choice = prompt(
            "ДЕННИК ФЕДИ\n" +
            "На двери денника весит табличка\n" +
            " Частная лошадь! Не входить!.\n" +
            "1 — все равно зайти\n" +
            "2 — пройти мимо\n" +
            "0 — Завершить игру"
        );
        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "2") {
            room = "конюшня";
        } else if (choice === "1") {
            alert("как только вы зашли лошадь развернулась и легнула вас")
            break

        }


    }
    // МАНЕЖ (ФИНАЛ)
    else if (room === "манеж") {

        const choice = prompt(
            "МАНЕЖ\n" +
            "1 — Начать тренировку\n" +
            "2 — Вернуться на улицу\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) break;
        else if (choice === "2") room = "улица";
        else if (choice === "1") {


            if (!inventory.includes("тренер")) {
                alert("тренер даже не пришел к вам")
                break
            } if (!inventory.includes("шлем")) {
                alert("безопасность превыше всего")
                break
            } if (!inventory.includes("хлыст")) {
                alert("вы не справились с управлением")
                break
            } if (!horse.includes("седло" || "вальтрап" || " уздечка" || "подпруга")) {
                alert("вы не поседлали лошадь")
                break
            } else {
                alert("тренировка прошла хорошо")
                if (inventory.includes("морковь")) {
                    alert("вы похвалили лошадь после тренировки")
                }
            }
        }
    }
}

alert("Игра завершена.");