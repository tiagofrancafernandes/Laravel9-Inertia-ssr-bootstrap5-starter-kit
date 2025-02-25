# Laravel Starter Kit (Inertia-SSR - Vue3 - Bootstrap 5)

# Next steps

- From webpack/mix to vite
- Use 1 file for Edit and Create (to use `resources/js/Pages/Role/Edit.vue` as base)

### Forked from (souravtah/Laravel9-Inertia-ssr-bootstrap5-starter-kit)[https://github.com/souravtah/Laravel9-Inertia-ssr-bootstrap5-starter-kit]

Use this starter kit to develop with Laravel 9 setup InertiaJs with Server Side Rendering (SSR), Vue Js 3 and Bootstrap 5

## Support me

<a href='https://ko-fi.com/J3J4BZD4N' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Requirements

* PHP 8.0 or latest
* Node 14 or latest

## How to start
<b>To use roles & permissions: select the branch "Branch_with_roles_permissions"</b>

Clone the repo https://github.com/souravtah/Laravel9-Inertia-ssr-bootstrap5-starter-kit.git
```bash
$ cp .env.example .env # setup your database
$ composer install
$ php artisan key:gen
$ npm install
$ npm run dev # optional only if any changes you make in resource/js
$ php artisan migrate --seed
$ php artisan serve
```

## Compile Assets

```bash
$ npm run dev
```

or

```bash
$ npm run watch
```
## Login using the following credentials:

Admin:
username/email: admin@example.com
password: password

User:
username/email: user@example.com
password: password
