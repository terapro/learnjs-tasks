function User() {
  var firstName, surname;
  this.setFirstName = name => {
    firstName = name;
  };
  this.setSurname = name => {
    surname = name;
  };
  this.getFullName = name => {
    return `${firstName} ${surname}`;
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
console.log(user.getFullName());
// Петя Иванов
