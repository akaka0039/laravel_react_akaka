# Laravel React Example Full Stack Application

Demo: https://laravel-react-akaka.com/users  
There are the error which is 500(server error)  
~Only use the functions which are 'login', 'signup' and 'delete' 2022 12 25~

# purpose

manege user information which are name and email

# major function

login  
signup  
delete  
edit  
add new  
~※ ▲ we can not use, I try to solve them now.~

# dependencies

```
"laravel": "^9.19",
"react": "^18.2.0",
"axios": "^1.1.2",
"laravel-vite-plugin": "^0.7.2",
"lodash": "^4.17.19",
"postcss": "^8.1.14",
"vite": "^4.0.0"

"server"
hostinger.com
```

# build/deploy

build:  
nmp run build

deploy:

1. make basic setting in hostinger
2. login ssh
3. put command
   cd domains  
   git clone https://github.com/akaka0039/laravel_react_akaka.git api.laravel-example.com  
   cd api.laravel-example.com

[install composer]:  
composer --version  
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"  
php composer-setup.php  
php -r "unlink('composer-setup.php');"

php composer.phar install

[make env file]  
cp .env.example .env  
vim .env  
php artisan key:generate --ansi  
php artisan migrate  
php artisan db:seed

cd ../laravel-react-akaka.com/public_html  
ln -s ~/domains/api.laravel-example.com/public api

please check the video ↓

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
