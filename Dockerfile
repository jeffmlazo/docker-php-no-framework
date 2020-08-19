FROM php:7.2-apache

RUN apt-get update && apt-get install -y

RUN docker-php-ext-install mysqli pdo_mysql

RUN mkdir /app \
    && mkdir /app/docker-php-no-framework \
    && mkdir /app/docker-php-no-framework/www

COPY www/ /app/docker-php-no-framework/www/
RUN cp -r /app/docker-php-no-framework/www/* /var/www/html/.