// let ve const ile değiken tanımlama 

// var ile değişken tanımlama

var name = "Mehmet";
console.log(name);

name = "Ahmet";
console.log(name);

// let ile değişken tanımlama

let name1 = "Mehmet";
console.log(name1);

name1 = "Ahmet";
console.log(name1);

// const ile değişken tanımlama

const name2 = "Mehmet";

console.log(name2);

// name2 = "Ahmet"; // const ile tanımlanan değişkenin değeri değiştirilemez

// const ile tanımlanan değişkenlerin değerleri değiştirilemez fakat içerisindeki objelerin değerleri değiştirilebilir

const person = {
    name: "Mehmet",
    age: 25
}


console.log(person);

person.name = "Ahmet";
person.age = 26;

console.log(person);

// const ile tanımlanan değişkenlerin değerleri değiştirilemez fakat içerisindeki objelerin değerleri değiştirilebilir
// const ile tanımlanan değişken boş olarak tanımlanamaz


const numbers = [1,2,3,4,5];

console.log(numbers);

numbers.push(6);

console.log(numbers);

// var ile let arasındaki farklar
// - var ile tanımlanan değişkenler global değişken olarak tanımlanır
// - let ile tanımlanan değişkenler ise sadece tanımlandığı scope içerisinde geçerlidir
// - var ile tanımlanan değişkenler tekrar tanımlanabilirken let ile tanımlanan değişkenler tekrar tanımlanamaz
// - var ile tanımlanan değişkenlerin değerleri değiştirilebilirken let ile tanımlanan değişkenlerin değerleri değiştirilebilir
// - const ile tanımlanan değişkenlerin değerleri değiştirilemez fakat içerisindeki objelerin değerleri değiştirilebilir

//Karşılaştırma Operatörleri:

// == : Eşitlik kontrolü yapar. İki değer birbirine eşitse true döner.
// === : Katı eşitlik kontrolü yapar. İki değer hem değerleri hem de türleri açısından birbirine eşitse true döner.
// != : Eşit değil mi kontrolü yapar. İki değer birbirine eşit değilse true döner.
// !== : Katı eşit değil mi kontrolü yapar. İki değer hem değerleri hem de türleri açısından birbirine eşit değilse true döner.
// > : Büyüktür kontrolü yapar. Sol tarafındaki değer sağ tarafındaki değerden büyükse true döner.
// < : Küçüktür kontrolü yapar. Sol tarafındaki değer sağ tarafındaki değerden küçükse true döner.
// >= : Büyük eşit mi kontrolü yapar. Sol tarafındaki değer sağ tarafındaki değerden büyük veya eşitse true döner.
// <= : Küçük eşit mi kontrolü yapar. Sol tarafındaki değer sağ tarafındaki değerden küçük veya eşitse true döner.
// Mantıksal Operatörler:
// 
// && : Mantıksal ve operatörü. İki koşul da true ise true döner.
// || : Mantıksal veya operatörü. İki koşullardan en az biri true ise true döner.
// ! : Mantıksal değil operatörü. Bir koşulun tersini alır. true ise false, false ise true döner.

//if Koşul Yapısı:

if (koşul) {
    // koşul doğruysa (true) bu kod bloğu çalışır
}

//if / else Koşul Yapısı:

if (koşul) {
    // koşul doğruysa (true) bu kod bloğu çalışır
} else {
    // koşul yanlışsa (false) bu kod bloğu çalışır
}

//if / else if / else Koşul Yapısı:

if (koşul1) {
    // koşul1 doğruysa bu kod bloğu çalışır
} else if (koşul2) {
    // koşul1 yanlış ve koşul2 doğruysa bu kod bloğu çalışır
} else {
    // hem koşul1 hem de koşul2 yanlışsa bu kod bloğu çalışır
}

//Bu yapılar, JavaScript'te koşullu ifadelerde ve karar verme süreçlerinde kullanılır. "koşul" yerine genellikle bir karşılaştırma ifadesi veya mantıksal operatörlerin bir kombinasyonu gelir.

switch (değer) {
    case değer1:
        // değer, değer1'e eşitse bu kod bloğu çalışır
        break;
    case değer2:
        // değer, değer2'ye eşitse bu kod bloğu çalışır
        break;
    // daha fazla case ifadesi eklenebilir...
    default:
        // hiçbir case ifadesi eşleşmezse bu kod bloğu çalışır
}

//switch / case yapısı, bir değişkenin değerine göre farklı kod bloklarını çalıştırmak için kullanılır. değer ile her case ifadesinin değeri karşılaştırılır ve eşleşen ilk case ifadesinin kod bloğu çalıştırılır. Eğer hiçbir case ifadesi eşleşmezse, default kod bloğu çalıştırılır.

// break ifadesi, switch / case yapısından çıkmak için kullanılır. Eğer break ifadesi olmazsa, eşleşen case ifadesinden sonra gelen tüm case ifadeleri (ve default ifadesi) çalıştırılır, bu da genellikle istenmeyen bir davranıştır.


//Ternary Operatör (Koşul ? Doğruysa : Yanlışsa):

let sonuc = koşul ? değer1 : değer2;

//Bu yapı, koşul doğruysa değer1'i, yanlışsa değer2'yi sonuc değişkenine atar.

//Bu, if / else koşul yapısının daha kısa bir versiyonudur ve genellikle tek satırlı kararlar için kullanılır. Aynı işlem if / else ile şu şekilde yapılır:

let sonucc;
if (koşul) {
    sonuc = değer1;
} else {
    sonuc = değer2;
}

//Her iki yapı da aynı işlevi görür, ancak ternary operatörü daha kısa ve daha az kod gerektirir.

//JavaScript'te, ternary operatörlerini zincirleme (chaining) yapabilirsiniz. Bu, birden fazla koşulu kontrol etmek için kullanışlıdır. İşte bir örnek:

let value = 15;
let result = value > 20 ? "greater than 20" :
             value > 10 ? "greater than 10" :
             "10 or less";
console.log(result); // Outputs: "greater than 10"

//Tabii ki, işte JavaScript'te kullanıcıdan bilgi alma ve HTML Query Selector kullanımının bir özeti:

let bilgi = prompt("Bir bilgi girin:");

//Bu kod, kullanıcıya bir dialog kutusu gösterir ve kullanıcının girdiği bilgiyi bilgi değişkenine atar.

//HTML Query Selector:

let element = document.querySelector("selector");

//Bu kod, belirtilen CSS seçicisine uyan ilk HTML elementini seçer ve element değişkenine atar. Eğer hiçbir element uymazsa, null döndürür.

let elements = document.querySelectorAll("selector");

//Bu kod, belirtilen CSS seçicisine uyan tüm HTML elementlerini bir NodeList olarak döndürür. Eğer hiçbir element uymazsa, boş bir NodeList döndürür.

//Bu seçiciler, HTML belgesinde belirli elementleri bulmak ve manipüle etmek için kullanılır. "selector" yerine herhangi bir CSS seçicisi gelebilir, örneğin .class, #id, element vb.

//JavaScript ile HTML elementlerine CSS eklemek ve çıkarmak için genellikle classList özelliği kullanılır. İşte bir örnek:

//CSS Sınıfı Eklemek:

element.classList.add("myClass");

//Bu kod, element'in classList özelliğine myClass sınıfını ekler.

//CSS Sınıfı Çıkarmak:

element.classList.remove("myClass");

//Bu kod, element'in classList özelliğinden myClass sınıfını çıkarır.

//CSS Sınıfı Kontrol Etmek:

if (element.classList.contains("myClass")) {
    // element, "myClass" sınıfına sahipse bu kod bloğu çalışır
}

//Bu kod, element'in classList özelliğinde myClass sınıfının olup olmadığını kontrol eder.

//CSS Sınıfını Açıp Kapatmak:

element.classList.toggle("myClass");

//Bu kod, element'in classList özelliğinde myClass sınıfı varsa kaldırır, yoksa ekler.

//JavaScript'te template literals, bir dizeyi oluşturmak için kullanılan özel bir dize sözdizimidir. Template literals, back-tick karakteri ( ) ile tanımlanır ve çok satırlı dizeleri ve dize içi ifade eklemeyi kolaylaştırır. İşte bir örnek:

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Outputs: "Hello, John!"

//Bu örnekte, ${name} ifadesi name değişkeninin değeri olan "John" ile değiştirilir. Bu, bir dizenin içine değişkenler, ifadeler veya JavaScript kodu eklemek için kullanılır.

//Ayrıca, template literals çok satırlı dizeleri destekler:

let multiLineString = `This is
a multi-line
string.`;
console.log(multiLineString);
// Outputs:
// This is
// a multi-line
// string.

//Bu özellikler, template literals'ı JavaScript'teki normal dize tanımlamalarından (' ' veya " ") daha esnek ve güçlü kılar.


//JavaScript'te, fat arrow fonksiyonları (() => {}), fonksiyonları daha kısa bir sözdizimi ile oluşturmanın bir yoludur. İşte bir örnek:

let myFunction = () => {
    console.log("Hello, world!");
};
myFunction(); // Outputs: "Hello, world!"

//Bu örnekte, myFunction adında bir fat arrow fonksiyonu oluşturduk ve sonra bu fonksiyonu çağırdık.

//Fat arrow fonksiyonları, parametre alabilir:

let greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("John"); // Outputs: "Hello, John!"

//Bu örnekte, greet fonksiyonu bir name parametresi alır ve bu parametreyi kullanarak bir selamlama mesajı yazdırır.

//Eğer fonksiyon yalnızca bir ifade döndürüyorsa, {} ve return anahtar kelimesi atlanabilir:

let square = (x) => x * x;
console.log(square(5)); // Outputs: 25

//Bu örnekte, square fonksiyonu bir x parametresi alır ve x'in karesini döndürür.


//JavaScript'te bir fonksiyona parametre eklemek ve bir değer döndürmek oldukça basittir. İşte bir örnek:

function add(x, y) {
    let sum = x + y;
    return sum;
    
}

let resultt = add(5, 3);
console.log(result); // Outputs: 8

//Bu örnekte, add adında bir fonksiyon oluşturduk. Bu fonksiyon, x ve y adında iki parametre alır. Fonksiyon, bu iki parametrenin toplamını hesaplar ve return anahtar kelimesi ile bu toplamı döndürür.

//Fonksiyonu çağırırken, parametrelerin değerlerini sağlarız (add(5, 3)). Fonksiyonun döndürdüğü değer (8), result değişkenine atanır ve sonra bu değer yazdırılır.

//Aynı işlemi bir arrow fonksiyonu kullanarak da yapabiliriz:

let add = (x, y) => {
    let sum = x + y;
    return sum;
}

let resulta = add(5, 3);
console.log(result); // Outputs: 8

//DOM (Document Object Model) eventleri, bir web sayfasında gerçekleşen belirli bir olayı ifade eder. Bu olaylar, kullanıcı etkileşimleri (tıklama, klavye tuşuna basma, fare hareketi vb.) veya tarayıcı tarafından kontrol edilen olaylar (sayfa yükleme, hata mesajları vb.) olabilir.

//JavaScript, bu olayları dinlemek ve belirli bir olay gerçekleştiğinde bir işlem gerçekleştirmek için kullanılır. İşte //bazı yaygın DOM olayları:
//
//click: Bir elemente tıklanıldığında tetiklenir.
//load: Bir sayfa veya bir resim tamamen yüklendiğinde tetiklenir.
//mouseover: Fare bir elementin üzerine geldiğinde tetiklenir.
//mouseout: Fare bir elementin üzerinden çıktığında tetiklenir.
//keydown: Bir klavye tuşuna basıldığında tetiklenir.
//keyup: Bir klavye tuşu bırakıldığında tetiklenir.
//Bu olayları dinlemek için genellikle addEventListener fonksiyonu kullanılır:

let button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

//Bu örnekte, bir buton elementini seçiyoruz ve 'click' olayını dinliyoruz. Butona tıklandığında, 'Button was clicked!' mesajını konsola yazdırıyoruz.