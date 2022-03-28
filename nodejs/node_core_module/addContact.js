const fs = require('fs');
const validator = require('validator');

/*
  * Kita cek terlebih dahulu apakah file yang akan kita input ada tersebut
  * Kita bisa menggunakan method existSync pada fs
*/

// Kita buat folder data bila tidak ada folder data
if(!fs.existsSync('data')) {
    fs.mkdirSync('data');
  }
  
  // Kita buat file contacts.json bila tidak file tersebut
  if(!fs.existsSync('data/contacts.json')){
    fs.writeFileSync('data/contacts.json', '[]', 'utf-8');
  }
  
  /*
    * kita bisa memasukkan input di dalam terminal
    * menggunakan readLine
  */
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const generalQuestion = question => {
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
  }

  const simpanContact = (nama, email, noHp) => {
    const contact = {nama, email, noHp};
    const file = fs.readFileSync("data/contacts.json", 'utf-8');
    const contacts = JSON.parse(file);
      
    contacts.push(contact);
      
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    rl.close(); // harus diberi close() agar tidak terjadi hang.....
  }

module.exports = {
    generalQuestion,
    emailQuest,
    simpanContact
}