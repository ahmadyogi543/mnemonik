# Mnemonik: A Note-taking App

Mnemonik adalah sebuah aplikasi note-taking (pencatatan) berbasis web yang dapat digunakan untuk mencatat berbagai hal dengan tujuan agar pengguna aplikasi dapat menuliskan sesuatu hal namun kadang bisa terlupa. Nama aplikasi sendiri "Mnemonik" dalam Kamus Besar Bahasa Indonesia (KBBI) diartikan sebagai "rumus atau ungkapan untuk membantu mengingat-ingat sesuatu". Sejalan dengan arti dari kata ini, aplikasi memiliki tujuan agar pengguna mampu membantu pengguna dalam mengingat hal-hal kecil yang mudah terlupa dengan cara menuliskannya menjadi sebuah catatan.

## Arsitektur dan Teknologi

Aplikasi ini dibangun dengan menerapkan arsitektur client-server di mana client berupa web browser yang akan melakukan _request_ data ke server yang berupa REST API. Untuk memenuhi kebutuhan ini, dibutuhkan beberapa teknologi yang digunakan dalam pengembangan aplikasi ini adalah sebagai berikut.

### Client

Pada sisi client, aplikasi berupa sebuah aplikasi web yang dibangun menggunakan teknologi berikut:

- React: untuk membangun antar-muka (UI) aplikasi

- TypeScript: bahasa pemrograman yang digunakan untuk menambah produktivitas penulisan kode program dengan adanya sistem tipe data

- Tailwind CSS: pustaka untuk mempermudah mengatur tampilan antar-muka (UI) tanpa perlu menulis CSS secara langsung

- Vite: sebuah build tools untuk mempermudah dalam pengembangan aplikasi web

### Server

Pada sisi client, aplikasi berupa sebuah aplikasi web yang dibangun menggunakan teknologi berikut:

- Node.js: sebuah runtime untuk menjalankan program yang ditulis dengan bahasa pemrograman JavaScript di sisi server

- TypeScript: bahasa pemrograman yang digunakan untuk menambah produktivitas penulisan kode program dengan adanya sistem tipe data

- Express: sebuah web framework untuk back-end, dilengkapi dengan berbagai fungsi untuk bekerja dengan web pada sisi server

- SQLite: sebuah sistem manajemen basis data relasional yang bersifat lokal sehingga mudah untuk integrasi tanpa perlu menjalankan RDMBS lain yang pada umumnya berarsitektur client-server

## Tutorial Menjalankan Aplikasi

Untuk dapat menjalankan aplikasi ini dalam mode _development_, diperlukan beberapa aplikasi sebagai berikut:

- Node.js
- Terminal

> Khusus untuk sistem operasi Windows, untuk dapat mengeksekusi perintah yang akan dipaparkan wajib menggunakan BASH atau shell lainnya. Adapun hal ini dapat dicapai dengan menggunakan Git BASH ataupun menggunakan fitur WSL dan sebagainya.

Adapun langkah-langkah yang harus dilakukan adalah sebagai berikut.

Pertama lakukan instalasi pustaka yang digunakan pada pengembangan aplikasi ini dengan perintah berikut.

Perintah untuk instalasi pustaka pada sisi client:

```sh
$ npm run client-install
```

Perintah untuk instalasi pustaka pada sisi server:

```sh
$ npm run server-install
```

Selanjutnya, perhatikan bahwa aplikasi ini menggunakan `environment variables` untuk dapat mengakses berbagai value penting yang bersifat sebagai konfigurasi aplikasi. Adapun berikut akan dipaparkan bagaimana cara untuk dapat mengatur `environment variables` pada aplikasi.

Untuk sisi server, pertama salinlah berkas `.env` pada berkas baru dengan nama `.env.local` dan kemudian ubah seperti berikut.

```
DB_NAME=dev.db
HOSTNAME=localhost
PORT=5000
```

> Sebenarnya bisa saja value untuk PORT diubah sesuai keinginan. Adapun untuk DB_NAME dan HOSTNAME harus tetap sama karena server sedang dijalankan pada mode development

Adapun untuk sisi client, pertama salinlah berkas `.env` pada berkas baru dengan nama `.env.local` dan kemudian ubah seperti berikut.

```
VITE_API_URL=http://localhost:5000/api
```

> Sesuaikan port untuk variabel di atas dengan PORT yang digunakan pada server, dan perhatikan tidak ada trailing slash pada URL di atas

Setelah selesai melakukan pengisian `environment variables`, selanjutnya aplikasi dapat dijalankan. Seperti yang disebutkan sebelumnya aplikasi ini berasitektur client-server, maka dari itu terdapat dua aplikasi yang berbeda yang harus dijalankan secara bersamaan. Untuk menjalan kedua aplikasi tersebut dapat digunakan perintah berikut.

Menjalankan client pada mode development:

```sh
$ npm run client-dev
```

Menjalankan server pada mode development:

```sh
$ npm run server-dev
```

> Pastikan ketika menjalankan perintah di atas pada terminal yang berbeda dan `pwd` ada pada tingkat yang sama dengan direktori `client` dan `server` dan terdapat berkas `package.json` (berisikan definisi perintah di atas)

Jika sudah selesai mengikuti langkah-langkah di atas maka cobalah untuk menjalankan aplikasi pada web browser, pada umumnya URL dari aplikasi web pada mode development adalah `http://localhost:5173` dan aplikasi siap untuk digunakan!

## Demo Aplikasi

Berikut adalah sedikit demo ketika menjalankan aplikasi menggunakan browser Chrome dan Sistem Operasi Arch Linux.

![demo-aplikasi](/resources/demo.gif)
