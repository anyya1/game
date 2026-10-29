const inventory = []; //рюгзак
const horse = [];  //чтобы седлать лошадь
let room = "улица";

let rulesKnown = false; // разговор с тренером
let fedHorse = false; // кормили ли лошадь
let sugarFed = false; // кормили ли сахаром
let carrotWarningGiven = false;// предупреждение конюха
let greetedGroom = false;// знакомство с конюхом


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
        }else if (choice === "2") {
            room = "дом";
        } else if (choice === "1") {
            const greeting = prompt(
                "здравствуйте,вы на тренировку?"
            )
            const talk = confirm("поговорить с тренером?");
            if (talk === true) {
                rulesKnown = true;
                alert(
                    "сегодня у тебя тренировка на лошади по кличке Кузя \n" +
                    "поседлай его и иди в манеж, я подойду чуть позже"
                );
                let talking = true;
                while (talking) {
                    const question = promt(
                        "Тренер смотрит на вас, что скажите?\n\n" +
                        "1 – А как правильно седлать лошадь?\n" +
                        "2 – Спасибо, а нужно ли что то еще?\n" +
                        "3 – Сам разберусь, уже сто раз это делал\n" +
                        "4 – Все понятно, пойду собираться"
                    )
                    if (question = "3") {
                        alert("раз сам разберешься то и сам потренируешься, я не буду тебя тренировать");
                        break;
                    } else if (choice === "1") {
                        alert("Сначала уздечка, потом вальтрап, седло и затяни подпругу");
                    } else if (choice === "2") {
                        alert("Не забудь хлыст и шлем");
                    }else if (choice === "4") {
                        alert("Удачи!");
                        room = "дом"
                    } else {
                        alert("Такого варианта нет.");
                    }

                }
            } 
        } 
        else {
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
    // КОРМОВАЯ 
    else if (room === "кормовая") {
        if (greeted === false) {
            const choice = prompt(
                "КОРМОВАЯ\n" +
                "Вы заходите в кормовую и видите там конюха, который перебирает мешки с кормом.\n" +
                "он поднимает голову и здороваеться с вами.\n" +
                "1 — Поздороваться в ответ \n" +
                "2 — проигнорировать"
            );
            if (choice === "2") {
                alert("вы прошли мимо, Конюх крикнул вслед: Даже не поздоровался!\n" +
                    "Вас наказали за грубость");
                break
            } else if (choice === "1") {
                let takingFood = true;
                alert("Конюх улыбнулся вам в ответ")
            } else {
                alert("Такого действия нет.");
                continue
            }
        }
        let takingFood = true;
        while (takingFood) {
            const choice = promt(
                "Конюх: Что то хотели?\n" +
                "1 – Взять морковь\n" +
                "2 – Взять сахар\n" +
                "3 – Вернуться в конюшню"
            );
            if (choice === "3") {
                takingFood = false;
                room = "конюшня"
            } else if (choice === "1") {
                inventory.push("морковь")
                alert("вы взяли морковку")

            } else if (choice === "2") {
                inventory.push("сахар")
                if (carrotWarningGiven === false) {
                    alert("конюх: сахар возьми, но запомни что лошади можно не более одного кусочка, инае ей станет плохо")
                    carrotWarningGiven = true

                } else {
                    alert("вы взяли сахар")
                }
            } else {
                alert("Такого действия нет.");
            }
        }

    }

    // ДЕННИК КУЗИ
    else if (room === "денник Кузи") {
        const choice = prompt(
            "ДЕННИК КУЗИ\n" +
            "1 — Вывести Кузю из денника\n" +
            "2 — Поседлать Кузю\n" +
            "3 — Покормить Кузю\n" +
            "4 — Выйти в конюшню\n" +
            "0 — Завершить игру"
        );

        if (choice === "0" || choice === null) {
            break;
        } else if (choice === "4") {
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
        }

        // КОРМЛЕНИЕ
        else if (choice === "3") {
            let feeding = true;
            while (feeding) {
                const feed = promt(
                    "Чем вы хотите угостить Кузю\n" +
                    "1 – морковкой\n" +
                    "2 – сахаром\n" +
                    "3 – ничем"
                );
                if (feed === "3") {
                    feeding = false
                } else if (feed === "1") {
                    if (inventory.includes("морковь")) {
                        inventory.splice(inventory.indexOf("морковь"), 1);
                        fedHorse = true;
                        alert("кузя с хрустом сьел морковку, теперь он доволен")
                    } else {
                        alert("у вас нет морковки")
                    }
                }
                else if (feed === "2") {
                    if (inventory.includes("сахар")) {
                        if (sugarFed === true) {
                            alert("можно давать только один кусочек сахара, кузе может стать плохо")
                            alert("игра окончена, вы не соблюдаете правил и можете навредить здоворью лошади")
                            break
                        } else {
                            inventory.splice(inventory.indexOf("сахар"), 1);
                            fedHorse = true;
                            sugarFed = true;
                            alert("Кузя аккуратно взял сахарок")
                        }
                    } else {
                        ("У вас нет сахара")
                    }
                } else {
                    alert("Такого действия нет.");
                }
            }
        }

        //СЕДЛОВКА
        else if (choice === "2") {
            const choice = prompt(
                "1 — надеть уздечку\n" +
                "2 — надеть вальтрап\n" +
                "3 — надеть седло\n" +
                "4 — надеть подпругу\n" +
                "0 — отмена"
            );
            if (choice === "0") {
                continue
            }
            else if (choice === "1") {
                if (horse.includes("уздечка")) {
                    alert("Вы уже надели уздеку");
                } else if (inventory.includes("уздечка")) {
                    horse.push("уздечка")
                    inventory.splice(inventory.indexOf("уздечка"), 1);
                    alert("вы надели уздечку")
                } else {
                    alert("для начала возьмите уздечку")
                }
            }
            else if (choice === "2") {
                if (!horse.includes("уздечка")) {
                    alert("Сначала наденьте уздечку")
                } else if (horse.includes("вальтрап")) {
                    alert("Вы уже надели вальтрап");
                } else if (inventory.includes("вальтрап")) {
                    horse.push("вальтрап")
                    inventory.splice(inventory.indexOf("вальтрап"), 1);
                    alert("вы надели вальтрап")
                } else {
                    alert("для начала возьмите вальтрап")
                }

            } else if (choice === "3") {
                if (!horse.includes("вальтрап")) {
                    alert("сначала наденьте вальтрап")
                } else if (horse.includes("седло")) {
                    alert("Вы уже надели седло");
                } else if (inventory.includes("седло")) {
                    horse.push("седло")
                    inventory.splice(inventory.indexOf("седло"), 1);
                    alert("вы надели седло")
                } else {
                    alert("для начала возьмите седло")
                }
            }
            else if (choice === "4") {
                if (!horse.includes("седло")) {
                    alert("сначала наденьте седло")
                } else if (horse.includes("подпруга")) {
                    alert("Вы уже надели подпругу");
                } else if (inventory.includes("подпруга")) {
                    horse.push("подпруга")
                    inventory.splice(inventory.indexOf("подпруга"), 1);
                    alert("вы надели подпругу")
                } else {
                    alert("для начала возьмите подпругу")
                }
            }

        } else {
            alert("Такого действия нет.");
        }
    }

    //ФЕДЯ
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

    // МАНЕЖ 
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


            if (!rulesKnown) {
                alert("тренер даже не пришел к вам")
                break
            } if (!inventory.includes("шлем")) {
                alert("безопасность превыше всего")
                break
            } if (!inventory.includes("хлыст")) {
                alert("вы не справились с управлением")
                break
            } if (!horse.includes("седло") || !horse.includes("вальтрап") || !horse.includes("уздечка") || !horse.includes("подпруга")) {
                alert("вы не поседлали лошадь")
                break
            } else {
                if (fedHorse === true) {
                    alert("тренировка прошла идеально")
                } else {
                    alert("тренировка прошла хорошо")
                }
                break
            }
        }
    }
}
alert("Игра завершена.");