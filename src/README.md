<!-- Fake Tweet Generator - Refactor Projesi

Proje Açıklaması
Bu projede mevcut Fake Tweet Generator uygulamasını modern React yapıları ile güncellemeniz beklenmektedir. Mevcut proje useState kullanılarak geliştirilmiştir. Ancak global state yönetimi için useReducer, useContext veya Redux Toolkit kullanılmalıdır. Ayrıca mevcut CSS yapısı Tailwind CSS ile güncellenmelidir.

Proje Gereksinimleri

1. Global State Yönetimi
- useState yerine useReducer ve useContext veya Redux Toolkit kullanarak state yönetimini sağlayın.
- Kullanıcı bilgileri, tweet içeriği ve medya verilerini merkezi bir state yapısında yönetin.

2. Stil Yönetimi
- Mevcut CSS yapılarını kaldırarak Tailwind CSS kullanarak bileşenleri yeniden tasarlayın.
- Tailwind class'ları ile stilleri optimize edin.

3. Bileşen Yapısı
- Mevcut App.js dosyası içindeki yapıyı daha modüler hale getirin.
- Aşağıdaki gibi bileşenler oluşturulmalıdır:
  - Tweet.js: Tweet bileşeni
  - TweetSettings.js: Tweet ayarlarının yönetildiği bileşen
  - UserProfile.js: Kullanıcı profil bilgilerini içeren bileşen
  - TweetList.js: Tweetlerin listelendiği bileşen

4. Yapısal Güncellemeler
- Props drilling’i önlemek için useContext veya Redux Toolkit kullanarak veri akışını düzenleyin.
- Fetch fonksiyonunu daha esnek hale getirin ve dummy verileri yönetin.
- Componentleri yeniden kullanılabilir hale getirin.

Başlangıç Adımları
- useState kullanımlarını belirleyin ve yerine useReducer veya Redux Toolkit ekleyerek değişiklikleri uygulayın.
- CSS kodlarını Tailwind CSS’e çevirin.
- Yeni bileşen yapısını oluşturun ve tüm state yönetimini güncelleyin.

Değerlendirme Kriterleri
✅ State yönetimi: useReducer veya Redux Toolkit’in doğru kullanımı
✅ Tailwind CSS entegrasyonu: Mevcut CSS’in kaldırılması ve Tailwind ile stil yönetimi
✅ Modüler bileşen yapısı: Kodun parçalanarak tekrar kullanılabilir bileşenlere dönüştürülmesi
✅ Kod okunabilirliği: Açıklayıcı yorumlar ve temiz kod prensiplerine uyum

Bu refactor süreci sonunda, Fake Tweet Generator projesi daha modern, ölçeklenebilir ve yönetilebilir hale gelecektir.
 -->
