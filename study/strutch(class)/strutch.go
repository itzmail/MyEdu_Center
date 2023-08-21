package main

import (
	"fmt"
	"reflect"
)

/**
  struct dipakai untuk merepresentasikan data,
  Struct sendiri bisa didefinisikan sebagai kumpulan beberapa field (object)

  kalau di OOP namanya class
*/

type Customer struct {
	name, address string
	age           int
}

type Animal struct {
	tipe, gender string
	age          int
}

func main() {
	ismail := Customer{
		name:    "Ismail",
		address: "Magelang",
		age:     22,
	}

	caty := Animal{
		tipe:   "Carnivore",
		gender: "male",
		age:    2,
	}

	fmt.Println(ismail)
	fmt.Println(caty.gender)
}