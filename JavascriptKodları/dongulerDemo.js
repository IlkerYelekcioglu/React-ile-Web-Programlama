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

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);

 for(i=0;i<kullanicilar.length;i++)   {
    if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
        return true;
    }
 }
 return false;
}

function giris(){
if(kullaniciVarmi(email,sifre)){
   console.log(tivitler)
}else{
    console.log("Kullanıcı adı veya şifresi hatalı");
    //; javascriptte zorunlu değildir.
}
}
giris(email,sifre)