follow these steps to install the backend application

1: clone from gitlab.com/alikhanhaidari/karimglass
2: extract the project and open terminal in the root directory of the project
3: go to xampp sql database and create the database named 'karimglass'
4: duplicate the '.env-example' file in root directory and rename it as '.env'
5: run => composer install
6: run => php artisan migrate
7: run => php artisan serve
8: now api backend app is ready 
