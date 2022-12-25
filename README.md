# Laravel React Example Full Stack Application

Demo: https://laravel-react-akaka.com/users
There are the error which is 500(server error)
Only use the functions which are 'login', 'signup' and 'delete' now
2022 12 25

# Reference

https://github.com/thecodeholic/laravel-react-starter/blob/main/README.md?plain=1

Example Application build with Laravel and React

> The repo was created while I was working on the following [YouTube tutorial](https://youtu.be/qJq9ZMB2Was)

## Installation

Make sure you have environment setup properly. You will need PHP8.1, composer and Node.js.

1. Download the project (or clone using GIT)
2. Copy `.env.example` into `.env` and configure database credentials
3. Navigate to the project's root directory using terminal
4. Run `composer install`
5. Set the encryption key by executing `php artisan key:generate --ansi`
6. Run migrations `php artisan migrate --seed`
7. Start local server by executing `php artisan serve`
8. Open new terminal and navigate to the `react` folder
9. Copy `react/.env.example` into `.env` and adjust the `VITE_API_BASE_URL` parameter
10. Run `npm install`
11. Run `npm run dev` to start vite server for React
