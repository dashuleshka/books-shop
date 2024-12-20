1.1 Название проекта
Fox Library — это веб-приложение для поиска и просмотра книг, интегрированное с Google Books API.

1.2 Описание
Приложение позволяет пользователям искать книги по различным фильтрам, таким как название, автор и тема. Оно также отображает результаты в виде карточек с изображениями и информацией о книгах. Веб-приложение включает систему регистрации, входа и отображения списка заказов пользователя.

1.3 Цель проекта
Проект направлен на создание удобного интерфейса для поиска книг с использованием Google Books API, а также для отображения информации о книгах с возможностью фильтрации по различным категориям.

2 Функциональные требования
(вступительная страница HomePage ознакомительная, поисковик просто так)
2.1 Поиск книг
Пользователь может ввести запрос для поиска книг.
Поиск происходит по трем категориям: название, автор и тема.
Результаты поиска отображаются в виде карточек с названием, автором и изображением обложки книги.
2.2 Регистрация и авторизация
Пользователи могут создать аккаунт и войти в личный кабинет (без проверок на наличие учетной записи).
Для авторизации используется модальное окно с информацией о необходимости войти.
2.3 Просмотр книг
При клике на карточку книги пользователь перенаправляется на детальную страницу с информацией о книге.
2.4 Отображение результатов
При отсутствии результатов поиска отображается сообщение "No books found".
2.5 Адаптивность
Веб-приложение должно корректно отображаться на устройствах с разными разрешениями экрана (мобильные, планшеты, десктопы).

3.1 Используемые технологии
Frontend:
React (создание компонент)
CSS (стилизация)
React Router (маршрутизация)
Fetch API (для запросов к внешнему API)
Backend:
Для данного проекта бэкенд не используется. Все запросы отправляются на сторонний API (Google Books API).
API:
Google Books API для поиска и получения данных о книгах.

3.2 Установка и настройка
3.2.1 Установка зависимостей
Клонировать репозиторий на локальную машину:

bash
Копировать код
git clone https://github.com/yourusername/books-shop.git
Перейти в директорию проекта:

bash
Копировать код
cd books-shop
Установить зависимости с помощью npm:

bash
Копировать код
npm install

3.2.2 Настройка переменных окружения
Для работы с API Google необходимо настроить переменную окружения:

Создать файл .env в корне проекта.

Внутри файла .env добавить строку:
REACT_APP_GOOGLE_API_KEY=your-google-api-key
Важно: Необходимо заменить your-google-api-key на свой собственный ключ API, который можно получить, зарегистрировавшись в Google Cloud Console.

Запустите приложение локально:
npm start

не забыть включить VPN
