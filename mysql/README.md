## Belajar MySQl

Model mysql ini hampir sama seperti model excel dimana kita belajar mengatur data dengan bantuan tabel

**Tetapi yang membedakan adalah MySQl di setiap kolomnya tidak boleh memiliki tipe data yang berbeda**

### Tipe Data MySQL
1. Tipe Data Number

Hampir sama seperti di Java ada 2 macam yang pertama
  * Integer
  1. TINYINT
  2. SMALLINT
  3. MEDIUMINT
  4. INT 
  5. BIGINT

  perlu diperhatikan di tipe data Integer ini ada tipe data yang *signed* dan *unsigned*.
  untuk unsigned itu tipe data yang tidak bisa negatif.

  * Floating Point
  1. Float 
  2. Double

Ada juga selain itu ada tipe data DECIMAL. Ini tipe data number khusus yang bisa ditentukan jumlah precision(panjang) dan scale nya

  contoh : DECIMAL(5, 2) => artinya angka ini dapat menampung sebanyak 5 angka dan terdapat 2 angka dari belakang jadi hasilnya.
  ~ min = -999.99;
  ~ max = 999.99;

  @ Number ATtribute
   $ Type(N) => tipe dari Tipe data Number contoh TINYINT(3) => jadi bisa menampung 3 angka dengan jenis TINYINT
   $ ZEROFILL => contoh aja ya... INT(3) ZEROFILL, => 7 jadi nanti ditampilkan 007

2. Tipe Data Text

  * CHAR 
  langsung singkat aja jadi kalau kita menggunakan tipe data Char itu meskipun kita isi string kosong maka akan diisi berupa spasi jadi size file tetap sama

  * VARCHAR
  bedan kalau kita pakai tipe data Varchar, jadi varchar sifatnya dinamis. contoh => VARCHAR(4) => maka akan menampilkan charater maks 4 dan bila tidak kita isi kosong atau string kosong maka akan diisi string kosong juga

  * TEXT
  Pada tipe data TEXT ini masih dibagi lagi :
    1. TINYTEXT
    2. TEXT
    3. MEDIUMTEXT
    4. LONGTEXT

    untuk sizenya bisa dilihat di videonya PZN

  * ENUM
  
  ENUM adalah tipe data STRING isinya hanya sesuatu yang sudah kita tentukan
  contoh :

  ~ ENUM('Pria', 'Wanita'), artinya kita hanya bisa menerima data 'Pria' atua 'wanita'