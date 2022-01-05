<?php
/**
 * Saat kita membuat aplikasi, bisa dipastikan kita akan banyak sekali membuat class
 * Jika class terlau banyak, kadang akan menyulitkan kita untuk mencari atau mengklasifikasikan jenis-jenis class
 * PHP memiliki fitur namespace, dimana kita bisa menyimpan class-class kita di dalam namespace
 * Namespace bisa nested, dan jika kita ingin mengakses class yang terdapat di namespace, kita perlu menyebutkakn namespacenya
 * Namespace bagus ketika kita punya beberapa class yang sama, dengan menggunakan namespace nama class sama tidak jadi masalah
 */

/*class Conflict {}

class Conflict {}

maka akan muncul error PHP Fatal : class has been declared
*/

// Cara buat namespace

namespace App;

class Product
{

}

namespace App\Core;
class Product
{
  var string $name = "Ismail";
}

$nameProduct = new Product();
var_dump($nameProduct);