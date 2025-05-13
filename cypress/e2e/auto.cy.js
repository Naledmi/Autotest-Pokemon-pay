import * as data from "../helpers/default_data.json"
import * as authorization from "../locators/authorization_page.json"
import * as profile from "../locators/profile_page.json"
import * as payment from "../locators/payment_page.json"
import * as result from "../locators/result_page.json"


describe('Автотест на покупку нового аватара', function () {

    it('Авторизация и покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Заходим на сайт
         cy.get(authorization.email).type(data.mail); // Вводим правильный логин
         cy.get(authorization.password).type(data.password); // Вводим правильный пароль
         cy.get(authorization.login_button).click(); // Находим и нажимаем конопку "Войти"

         cy.get(profile.profile).click();  // Находим и нажимаем на кнопку профиль своего тренера
         cy.get(profile.change_avatar).click(); // Находим и нажимаем на кнопку "Смена аватара"
         cy.get(profile.buy_avatar).first().click(); // Выбираем любой аватар и нажимаем кнопку "Купить"

         cy.get(payment.number).type(data.number_card); // Вводим верный номер карты
         cy.get(payment.date).type(data.card_expiration_date); // Вводим верный срок действия карты
         cy.get(payment.сvv).type(data.cvv); // Вводим верный cvv
         cy.get(payment.name_surname).type(data.name);; // Вводим верные Имя и фамилия владельца карты
         cy.get(payment.pay).click(); // Находим и нажимаем кнопку "Оплатить"

         cy.get(payment.sms_code).type(data.sms_code); // Вводим верный код из смс
         cy.get(payment.pay).click(); // / Находим и нажимаем конопку "Оплатить"

         cy.get(result.successful_text).contains('Покупка прошла успешно').should('be.visible'); // Находим нужный текст и текст виден пользователю
         cy.get(result.successful_image).should('be.visible'); // Картинка "Успешно" видна пользователю
         cy.get(result.return_store_image).contains('Вернуться в магазин').should('have.css', 'color', 'rgb(85, 137, 241)'); // Находим нужный текст текст и ткст имеет верный цвет
         cy.get(result.check_image).should('be.visible'); // Картинка "Галочка" видна пользователю
         cy.get(result.return_store).click(); // Находим и нажимаем конопку "Вернуться в магазин"
     })
 }) 
