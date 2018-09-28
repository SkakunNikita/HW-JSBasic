var login = prompt( 'Введите Ваш логин . . . ' );

if (login == 'Админ' ) {

  var password = prompt( 'Ваш пароль ?' );

  if (password == 'Чёрный Властелин' ) {
      alert( 'Добро пожаловать!' );
    } else if (password == null)  {
      alert ('Не перепутал ли ты кнопки?');
    } else {
     alert( 'Пароль ' + password + ' неверен!' );
    }
} else if (login == null) {
  alert ( 'Не перепутал ли ты кнопки?' );
} else {
  alert ( 'Ваш логин : ' + login + ' - неверен!' );
}
