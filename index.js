//! if-else ifadesi, bir koşulun true veya false olmasına bağlı olarak farklı kod bloklarını çalıştırmanıza izin veren bir koşullu ifadedir.
//! koşul, true veya false olarak değerlendirilen bir ifadedir. Eğer koşul true ise, if ifadesinin içindeki kod bloğu çalıştırılır. Eğer koşul false ise, else ifadesinin içindeki kod bloğu çalıştırılır.

// Öncelikle, kullanıcı adı ve şifre için iki sabit tanımlıyoruz
const username = "selim";
const password = "12345";

// Daha sonra, bir if-else ifadesi kullanarak kullanıcı adının "selim" olup olmadığını kontrol ediyoruz
if (username == "selim") {
  // Eğer kullanıcı adı "selim" ise, başka bir if-else ifadesi kullanarak şifrenin "12345" olup olmadığını kontrol ediyoruz
  if (password == "12345") {
    // Eğer şifre "12345" ise, konsola "Giriş Yapıldı" yazdırıyoruz
    console.log("Giriş Yapıldı");
  } else {
    // Eğer şifre "12345" değilse, konsola "Şifre Yanlış" yazdırıyoruz
    console.log("Şifre Yanlış");
  }
} else {
  // Eğer kullanıcı adı "selim" değilse, konsola "Giriş Yapılamadı" yazdırıyoruz
  console.log("Giriş Yapılamadı");
}

