class Personel {

    constructor(ad,soyad){
      this.ad = ad;
      this.soyad = soyad;
    }

    kaydet(){
        console.log(`Personel kaydedildi : ${this.ad}`);
    }
}

const personel = new Personel("Ilker","Yelekcioglu");
personel.kaydet();
 personel.adi = "Ilker";
 console.log(personel.adi);

