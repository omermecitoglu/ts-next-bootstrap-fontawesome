/* eslint-disable react/jsx-no-literals */
import { faHandPeace } from "@fortawesome/free-solid-svg-icons/faHandPeace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/esm/Button";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Popover from "react-bootstrap/esm/Popover";
import PopoverBody from "react-bootstrap/esm/PopoverBody";
import Filter from "~/components/Filter";

const Page = () => {
  const chapters = [
    {
      id: 1,
      chapterName: "Hücre",
    },
    {
      id: 2,
      chapterName: "Doku",
    },
    {
      id: 3,
      chapterName: "İskelet Kası ve Düz Kas ",
    },
    {
      id: 4,
      chapterName: "Embriyoloji ve Genital Sistem",
    },
    {
      id: 5,
      chapterName: "Hematopoetik Sistem",
    },
    {
      id: 6,
      chapterName: "Gastrointestinal Sistem",
    },
    {
      id: 7,
      chapterName: "Kardiyovasküler Sistem",
    },
    {
      id: 8,
      chapterName: "Endokrin Sistem",
    },
    {
      id: 9,
      chapterName: "Solunum Sistemi",
    },
    {
      id: 10,
      chapterName: "Santral Sinir Sistemi",
    },
    {
      id: 11,
      chapterName: "Görme Duyusu",
    },
    {
      id: 12,
      chapterName: "İşitme ve Koku Duyusu",
    },
    {
      id: 13,
      chapterName: "Üriner Sistem",
    },
    {
      id: 14,
      chapterName: "Metabolizmanın Temel Kavramları",
    },
    {
      id: 15,
      chapterName: "Hücre ve Organeller",
    },
    {
      id: 16,
      chapterName: "Karbonhidratlar",
    },
    {
      id: 17,
      chapterName: "Aminoasitler ve Proteinler",
    },
    {
      id: 18,
      chapterName: "Nükleik Asitler",
    },
    {
      id: 19,
      chapterName: "Lipitler",
    },
    {
      id: 20,
      chapterName: "Vitaminler",
    },
    {
      id: 21,
      chapterName: "Hormon Metabolizması",
    },
    {
      id: 22,
      chapterName: "Genel Farmakoloji",
    },
    {
      id: 23,
      chapterName: "Otonom Sinir Sistemi Farmakolojisi",
    },
    {
      id: 24,
      chapterName: "Kardiyovasküler Sistem Farmakolojisi",
    },
    {
      id: 25,
      chapterName: "Endokrin Sistem Farmakolojisi",
    },
    {
      id: 26,
      chapterName: "Santral Sinir Sistemi Farmakolojisi",
    },
    {
      id: 27,
      chapterName: "Otokoid İlaçlar",
    },
    {
      id: 28,
      chapterName: "NSAİ İlaçlar",
    },
    {
      id: 29,
      chapterName: "Antibiyotikler",
    },
    {
      id: 30,
      chapterName: "Mantar İlaçları",
    },
    {
      id: 31,
      chapterName: "Sıtma Tedavisi",
    },
    {
      id: 32,
      chapterName: "Anti Helmintik İlaçlar",
    },
    {
      id: 33,
      chapterName: "Antiprotozoal İlaçlar",
    },
    {
      id: 34,
      chapterName: "Antimikobakteriyel İlaçlar",
    },
    {
      id: 35,
      chapterName: "Antiviral İlaçlar",
    },
    {
      id: 36,
      chapterName: "Antineoplastik İlaçlar",
    },
    {
      id: 37,
      chapterName: "İmmünmodülatör İlaçlar",
    },
    {
      id: 38,
      chapterName: "Gastrointestinal Sistem Farmakolojisi",
    },
    {
      id: 39,
      chapterName: "Solunum Sistemi Farmakolojisi",
    },
    {
      id: 40,
      chapterName: "Toksikoloji Farmakolojisi",
    },
    {
      id: 41,
      chapterName: "Kemik Anatomisi",
    },
    {
      id: 42,
      chapterName: "Eklem Anatomisi",
    },
    {
      id: 43,
      chapterName: "Kas Anatomisi",
    },
    {
      id: 44,
      chapterName: "Pleksus Anatomisi",
    },
    {
      id: 45,
      chapterName: "Solunum Sistemi Anatomisi",
    },
    {
      id: 46,
      chapterName: "Kalp Anatomisi",
    },
    {
      id: 47,
      chapterName: "Arteriyel Sistem Anatomisi",
    },
    {
      id: 48,
      chapterName: "Venöz ve Lenfatik Sistem Anatomisi",
    },
    {
      id: 49,
      chapterName: "Sindirim Sistemi Anatomisi",
    },
    {
      id: 50,
      chapterName: "Ürogenital Sistem Anatomisi",
    },
    {
      id: 51,
      chapterName: "Duyu Organları Anatomisi",
    },
    {
      id: 52,
      chapterName: "Otonom Sinir Sistemi Anatomisi",
    },
    {
      id: 53,
      chapterName: "Santral Sinir Sistemi Anatomisi",
    },
    {
      id: 54,
      chapterName: "Hücre Hasarı ve Adaptif Değişiklikler",
    },
    {
      id: 55,
      chapterName: "İnflamasyon",
    },
    {
      id: 56,
      chapterName: "İmmün Sistem Patolojisi",
    },
    {
      id: 57,
      chapterName: "Yara Onarımı",
    },
    {
      id: 58,
      chapterName: "Hemodinami",
    },
    {
      id: 59,
      chapterName: "Neoplazi",
    },
    {
      id: 60,
      chapterName: "Çocukluk Çağı Hastalıkları ve Tümörleri",
    },
    {
      id: 61,
      chapterName: "Genetik Hastalıklar",
    },
    {
      id: 62,
      chapterName: "Çevresel Hastalıklar",
    },
    {
      id: 63,
      chapterName: "Solunum Sistemi Patolojisi",
    },
    {
      id: 64,
      chapterName: "Kalp Hastalıkları Patolojisi",
    },
    {
      id: 65,
      chapterName: "Damar Hastalıkları Patolojisi",
    },
    {
      id: 66,
      chapterName: "Hematopoetik Sistem Patolojisi",
    },
    {
      id: 67,
      chapterName: "Sindirim Sistemi Patolojisi",
    },
    {
      id: 68,
      chapterName: "Karaciğer Hastalıkları Patolojisi",
    },
    {
      id: 69,
      chapterName: "Pankreas Hastalıkları Patolojisi",
    },
    {
      id: 70,
      chapterName: "Böbrek Hastalıkları Patolojisi",
    },
    {
      id: 71,
      chapterName: "Sinir Sistemi Patolojisi",
    },
    {
      id: 72,
      chapterName: "Endokrin Sistem Patolojisi",
    },
    {
      id: 73,
      chapterName: "Kadın Genital Sistem Patolojisi",
    },
    {
      id: 74,
      chapterName: "Erkek Genital Sistem Patolojisi",
    },
    {
      id: 75,
      chapterName: "Meme Hastalıkları Patolojisi",
    },
    {
      id: 76,
      chapterName: "Kas Yumuşak Doku ve Periferik Sinir Sistemi Patolojisi",
    },
    {
      id: 77,
      chapterName: "Kemik ve Kıkırdak Patolojisi",
    },
    {
      id: 78,
      chapterName: "Eklem Patolojisi",
    },
    {
      id: 79,
      chapterName: "Deri Hastalıkları",
    },
    {
      id: 80,
      chapterName: "Genel Bakteriyoloji",
    },
    {
      id: 81,
      chapterName: "Antibakteriyel İlaçlar",
    },
    {
      id: 82,
      chapterName: "Sterilizasyon",
    },
    {
      id: 83,
      chapterName: "Gram (+) Kok Bakteriler",
    },
    {
      id: 84,
      chapterName: "Gram (-) Kok Bakteriler",
    },
    {
      id: 85,
      chapterName: "Gram (+) Çomak Bakteriler",
    },
    {
      id: 86,
      chapterName: "Gram (-) Çomak Bakteriler",
    },
    {
      id: 87,
      chapterName: "Mikobakteriler ",
    },
    {
      id: 88,
      chapterName: "Mikoplazmalar Spiroketler Klamidya Riketsiya",
    },
    {
      id: 89,
      chapterName: "Anaerop Bakteriler",
    },
    {
      id: 90,
      chapterName: "Viroloji",
    },
    {
      id: 91,
      chapterName: "Antiviraller ve Virüs Aşıları",
    },
    {
      id: 92,
      chapterName: "DNA Virüsleri",
    },
    {
      id: 93,
      chapterName: "RNA Virüsleri",
    },
    {
      id: 94,
      chapterName: "Hepatitler",
    },
    {
      id: 95,
      chapterName: "HIV",
    },
    {
      id: 96,
      chapterName: "Mantarlar",
    },
    {
      id: 97,
      chapterName: "Cilt ve Cilt altı Mantarları",
    },
    {
      id: 98,
      chapterName: "Sistemik Mikozlar",
    },
    {
      id: 99,
      chapterName: "Fırsatçı Mikozlar",
    },
    {
      id: 100,
      chapterName: "Protozoonlar",
    },
    {
      id: 101,
      chapterName: "Nematodlar",
    },
    {
      id: 102,
      chapterName: "Kan Parazitleri",
    },
    {
      id: 103,
      chapterName: "Helmintler",
    },
    {
      id: 104,
      chapterName: "Artropodlar",
    },
    {
      id: 105,
      chapterName: "Antiparazitler",
    },
    {
      id: 106,
      chapterName: "İmmünoloji ve Bağışıklama",
    },
    {
      id: 107,
      chapterName: "Enfeksiyonlar",
    },
    {
      id: 108,
      chapterName: "Dahiliye & Hematoloji",
    },
    {
      id: 109,
      chapterName: "Dahiliye & Onkoloji",
    },
    {
      id: 110,
      chapterName: "Dahiliye & Nefroloji",
    },
    {
      id: 111,
      chapterName: "Dahiliye & Kardiyoloji ",
    },
    {
      id: 112,
      chapterName: "Dahiliye & Göğüs Hastalıkları",
    },
    {
      id: 113,
      chapterName: "Dahiliye & Endokrinoloji",
    },
    {
      id: 114,
      chapterName: "Dahiliye & Romatoloji ve Allerji",
    },
    {
      id: 115,
      chapterName: "Dahiliye & Hepatoloji",
    },
    {
      id: 116,
      chapterName: "Dahiliye & Gastroenteroloji",
    },
    {
      id: 117,
      chapterName: "Dahiliye & Enfeksiyon Hastalıkları",
    },
    {
      id: 118,
      chapterName: "Pediatri & Yenidoğan",
    },
    {
      id: 119,
      chapterName: "Pediatri & Genetik",
    },
    {
      id: 120,
      chapterName: "Pediatri & Büyüme ve Gelişme",
    },
    {
      id: 121,
      chapterName: "Pediatri & Beslenme ve Malnütrisyon",
    },
    {
      id: 122,
      chapterName: "Pediatri & Gastroenteroloji",
    },
    {
      id: 123,
      chapterName: "Pediatri & Nöroloji",
    },
    {
      id: 124,
      chapterName: "Pediatri & Kardiyoloji",
    },
    {
      id: 125,
      chapterName: "Pediatri & Solunum Sistemi Hastalıkları",
    },
    {
      id: 126,
      chapterName: "Pediatri & Romatoloji",
    },
    {
      id: 127,
      chapterName: "Pediatri & Döküntülü Hastalıklar",
    },
    {
      id: 128,
      chapterName: "Pediatri & Alerji ve İmmünoloji",
    },
    {
      id: 129,
      chapterName: "Pediatri & Endokrinoloji",
    },
    {
      id: 130,
      chapterName: "Pediatri & Metabolik Hastalıklar",
    },
    {
      id: 131,
      chapterName: "Pediatri & Hematoloji",
    },
    {
      id: 132,
      chapterName: "Pediatri & Onkoloji",
    },
    {
      id: 133,
      chapterName: "Pediatri & Nefroloji",
    },
    {
      id: 134,
      chapterName: "Sıvı Elektrolit Dengesi & Asit-Baz Bozuklukları",
    },
    {
      id: 135,
      chapterName: "Beslenme",
    },
    {
      id: 136,
      chapterName: "Travmaya Sistemik Cevap ",
    },
    {
      id: 137,
      chapterName: "Şok",
    },
    {
      id: 138,
      chapterName: "Cerrahi Enfeksiyonlar",
    },
    {
      id: 139,
      chapterName: "Yara İyileşmesi",
    },
    {
      id: 140,
      chapterName: "Travma Hastasına Yaklaşım",
    },
    {
      id: 141,
      chapterName: "Yanık",
    },
    {
      id: 142,
      chapterName: "Meme Hastalıkları Cerrahisi",
    },
    {
      id: 143,
      chapterName: "Tiroid Bezi Hastalıkları ve Cerrahisi",
    },
    {
      id: 144,
      chapterName: "Paratiroid Bezi Hastalıkları ve Cerrahisi",
    },
    {
      id: 145,
      chapterName: "Adrenal Bezi Hastalıkları ve Cerrahisi",
    },
    {
      id: 146,
      chapterName: "Transplantasyon",
    },
    {
      id: 147,
      chapterName: "Özofagus Hastalıkları ve Cerrahisi",
    },
    {
      id: 148,
      chapterName: "Mide Hastalıkları ve Cerrahisi",
    },
    {
      id: 149,
      chapterName: "Obezite Cerrahisi",
    },
    {
      id: 150,
      chapterName: "İnce Bağırsak Hastalıkları ve Cerrahisi",
    },
    {
      id: 151,
      chapterName: "İntestinal Tıkanıklıklar ve Cerrahisi",
    },
    {
      id: 152,
      chapterName: "Kolon ve Rektum Hastalıkları ve Cerrahisi",
    },
    {
      id: 153,
      chapterName: "Appendiks Hastalıkları ve Cerrahisi",
    },
    {
      id: 154,
      chapterName: "Perianal Bölge Hastalıkları ve Cerrahisi",
    },
    {
      id: 155,
      chapterName: "Gastrointestinal Sistem Fistülleri ve Cerrahisi",
    },
    {
      id: 156,
      chapterName: "Karaciğer Hastalıkları ve Cerrahisi",
    },
    {
      id: 157,
      chapterName: "Dalak Hastalıkları ve Cerrahisi",
    },
    {
      id: 158,
      chapterName: "Safra Kesesi & Yolları ve Cerrahisi",
    },
    {
      id: 159,
      chapterName: "Pankreas Hastalıkları ve Cerrahisi",
    },
    {
      id: 160,
      chapterName: "Karın Duvarı & Zarları Hastalıkları ve Cerrahisi ",
    },
    {
      id: 161,
      chapterName: "Etik",
    },
    {
      id: 162,
      chapterName: "Hemostaz ve Transfüzyon",
    },
    {
      id: 163,
      chapterName: "Nöroloji",
    },
    {
      id: 164,
      chapterName: "Beyin Cerrahisi",
    },
    {
      id: 165,
      chapterName: "Psikiyatri",
    },
    {
      id: 166,
      chapterName: "Adli Tıp",
    },
    {
      id: 167,
      chapterName: "Çocuk Cerrahisi",
    },
    {
      id: 168,
      chapterName: "Kalp ve Damar Cerrahisi",
    },
    {
      id: 169,
      chapterName: "Göğüs Cerrahisi",
    },
    {
      id: 170,
      chapterName: "Kulak Burun Boğaz",
    },
    {
      id: 171,
      chapterName: "Göz ",
    },
    {
      id: 172,
      chapterName: "Halk Sağlığı",
    },
    {
      id: 173,
      chapterName: "Dermatoloji",
    },
    {
      id: 174,
      chapterName: "Ortopedi",
    },
    {
      id: 175,
      chapterName: "Üroloji",
    },
    {
      id: 176,
      chapterName: "Fizik Tedavi ve Rehabilitasyon",
    },
    {
      id: 177,
      chapterName: "Radyoloji",
    },
    {
      id: 178,
      chapterName: "Anestezi",
    },
    {
      id: 179,
      chapterName: "Kadın Genital Sistem Anatomisi",
    },
    {
      id: 180,
      chapterName: "Jinekolojik Muayene",
    },
    {
      id: 181,
      chapterName: "Üreme Fizyolojisi",
    },
    {
      id: 182,
      chapterName: "Kadın Genital Sistem Embriyolojisi",
    },
    {
      id: 183,
      chapterName: "Seksüel Gelişim Bozuklukları",
    },
    {
      id: 184,
      chapterName: "Puberte",
    },
    {
      id: 185,
      chapterName: "Menstruel Siklus",
    },
    {
      id: 186,
      chapterName: "Kronik Anovulasyon",
    },
    {
      id: 187,
      chapterName: "İnfertilite",
    },
    {
      id: 188,
      chapterName: "Kontrasepsiyon",
    },
    {
      id: 189,
      chapterName: "Menopoz",
    },
    {
      id: 190,
      chapterName: "Pelvik Ağrılar",
    },
    {
      id: 191,
      chapterName: "Pelvik Kitleler",
    },
    {
      id: 192,
      chapterName: "Cinsel Yolla Bulaşan Hastalıklar",
    },
    {
      id: 193,
      chapterName: "Ürojinekoloji",
    },
    {
      id: 194,
      chapterName: "Vulva ve Vajen Maligniteleri",
    },
    {
      id: 195,
      chapterName: "Serviks Maligniteleri",
    },
    {
      id: 196,
      chapterName: "Korpus Uteri Maligniteleri",
    },
    {
      id: 197,
      chapterName: "Tuba ve Over Maligniteleri",
    },
    {
      id: 198,
      chapterName: "Gestasyonel Trofoblastik Hastalıklar",
    },
    {
      id: 199,
      chapterName: "Plasenta",
    },
    {
      id: 200,
      chapterName: "Abortuslar",
    },
    {
      id: 201,
      chapterName: "Ektopik Gebelik",
    },
    {
      id: 202,
      chapterName: "Fetal ve Maternal Fizyoloji",
    },
    {
      id: 203,
      chapterName: "Gebelik ve Emzirmede İlaç ",
    },
    {
      id: 204,
      chapterName: "Prekonsepsiyonel ve Prenatal Değerlendirme",
    },
    {
      id: 205,
      chapterName: "Fetal Monitorizasyon",
    },
    {
      id: 206,
      chapterName: "Normal Doğum ve Komplikasyonlar",
    },
    {
      id: 207,
      chapterName: "Anormal Doğum ve Sezaryen",
    },
    {
      id: 208,
      chapterName: "Puerperal Hastalıklar",
    },
    {
      id: 209,
      chapterName: "Riskli Gebelikler",
    },
    {
      id: 210,
      chapterName: "Gebelikte Dahili ve Cerrahi Hastalıklar",
    },
  ];

  // chapters.splice(0, 150); // uncomment this to fix it

  const collection = Object.fromEntries(chapters.map(chapter => [chapter.id, chapter.chapterName] as const));

  return (
    <>
      <h1>
        {`${"Hello World"}`}
        {" "}
        <FontAwesomeIcon icon={faHandPeace} />
      </h1>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={(
          <Popover>
            <PopoverBody className="d-flex flex-column gap-3">
              <Filter
                label="All Chapters"
                keyName="chapter"
                collection={collection}
                now={Date.now()}
              />
            </PopoverBody>
          </Popover>
        )}
      >
        <Button size="sm" variant="info">Filter Button</Button>
      </OverlayTrigger>
    </>
  );
};

export default Page;
