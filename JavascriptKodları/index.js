var kullanicilar = [
    {email:"yelekciogluilker@gmail.com",sifre:"12345"},
    {email:"yelekciogluselahattin@gmail.com",sifre:"12345"}
]

var tivitler = [
    {email:"yelekciogluilker@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"yelekciogluilker@gmail.com",tivit:"Bugün hava çok güzel 2"},
    {email:"yelekciogluselahattin@gmail.com",tivit:"Kitap okuyacağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
if((email == kullanicilar[0].email  && sifre == kullanicilar[0].sifre) ||   
   (email == kullanicilar[1].email  && sifre == kullanicilar[1].sifre)){
   console.log(tivitler)
}else{
    console.log("Kullanıcı adı veya şifresi hatalı");
    //; javascriptte zorunlu değildir.
}
}
giris(email,sifre)