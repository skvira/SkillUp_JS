
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let userKeys = Object.keys(user);
for (let userKey of userKeys){
  console.log(`${userKey}: ${user[userKey]}`)
}
