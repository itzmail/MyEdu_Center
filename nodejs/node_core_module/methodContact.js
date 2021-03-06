const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

/*
 * Kita cek terlebih dahulu apakah file yang akan kita input ada tersebut
 * Kita bisa menggunakan method existSync pada fs
 */

// Kita buat folder data bila tidak ada folder data
if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

// Kita buat file contacts.json bila tidak file tersebut
if (!fs.existsSync("data/contacts.json")) {
  fs.writeFileSync("data/contacts.json", "[]", "utf-8");
}

/*
 * kita bisa memasukkan input di dalam terminal dengan menggunakan method readLine
 */
/* const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }); */

// Kita comment karena sudah tidak butuh pertanyaan dalam terminal
/* const generalQuestion = question => {
    return new Promise((resolve, reject) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });    
    })
  }
  
  const emailQuest = () => {
    return new Promise((resolve, reject) => {
      rl.question("Email mu apa : ", (answer) => {
        if(validator.isEmail('foo@bar.com')){
          resolve(answer);
        } else {
          resolve(null);
        }
      });    
    })
  } */

// Ambil data contact di file contatcs.json
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };
  /* const file = fs.readFileSync("data/contacts.json", 'utf-8');
    const contacts = JSON.parse(file); */
  const contacts = loadContact();

  // Cek bila ada duplikat nama
  const duplicat = contacts.find((contact) => contact.nama === nama);
  if (duplicat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false; // agar tidak menjalankan code yang ada di bawahnya
  }

  // cek email valid tidak
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!!"));
      return false;
    }
  }

  //cek nomor hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("Terima kasih sudah memasukkan data"));

  // Kita comment rl.close karena kita tidak memerlukkan input dari terminal lagi
  // rl.close(); // harus diberi close() agar tidak terjadi hang.....
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak"));
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (kontak) => kontak.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukkan`));
    return false;
  }

  console.log(chalk.greenBright.inverse.bold(`Kontak ditemukkan`));
  console.log(`nama : ${contact.nama}`);
  console.log(`email : ${contact.email}`);
  console.log(`noHP : ${contact.noHp}`);
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukkan`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", "Mantap");

  console.log(chalk.green.inverse.bold("Berhasil menghapus kontak"));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
