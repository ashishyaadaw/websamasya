// data for slider on home page

const people = [
  {
    id: 1,
    image: "/slide_images/ypamain.jpg",
    name: "Shiva Prasad Shukla, ",
    title: "Event held in colaboration with DDU Biotechnogy department and YPA",
    quote: " ",

    visibility: true,
  },
  {
    id: 2,
    image: "/slide_images/certificate_at_lucknow_university.jpg",
    name: "john doe",
    title: "YPA & Khwaja Moinuddin Chishti Language University, Lucknow Event",
    quote: " ",

    visibility: false,
  },
  {
    id: 3,
    image: "/slide_images/three_year_complete_ypa.webp",
    name: "peter smith",
    title: "YPA complete its three years of existence",
    quote: " ",

    visibility: true,
  },
  {
    id: 4,
    image: "/slide_images/jal_rakshak_event.webp",
    name: "Shiv Prasad Shukla ",
    title: "JAL RAKSHAK",
    quote: " ",

    visibility: true,
  },
  {
    id: 5,
    image: "/slide_images/jal_rakshak_event_guest.jpg",
    name: "Shiv Prasad Shukla",
    title: "YPA Community Champian Award 2022",
    quote: " ",

    visibility: true,
  },
  {
    id: 6,
    image: "/slide_images/plantation_ypa.jpg",
    name: "Shiva Prasad Shukla",
    title: "Tree plantation program on World Environment Day",
    quote: " ",

    visibility: true,
  },
  {
    id: 7,
    image: "/slide_images/certificate_distribution_30_days_workshops.jpg",
    name: "susan andersen",
    title: "Certificate Distribution Event",
    quote:
      "Certificate is distributed to participant who succesfully completes 30 days Personality Development Workshop",

    visibility: true,
  },
  {
    id: 8,
    image: "/slide_images/team_synergy.jpg",
    name: "Team Synergy ",
    title: "Synery Cancer Hostpital Head",
    quote: " ",

    visibility: true,
  },
  {
    id: 9,
    image: "/slide_images/group_photo_with_mani_ji.jpg",
    name: "susan andersen",
    title: "Workshop Mentor - Rajesh Mani Ji",
    quote: "Photo is taken after completion of workshop day - 7",

    visibility: true,
  },
  {
    id: 10,
    image: "/slide_images/mou_signed_dnpg.jpg",
    name: "Dr. Rajesh Singh Principle DNPGC",
    title: "MOU Signed between DNPG College , Gorakhpur and YPA",
    quote: `[05/10/2023]-आज यूथ पॉवर एसोसिएशन एवं दिग्विजयनाथ पी.जी. कॉलेज गोरखपुर  के बीच श्री शिव प्रसाद शुक्ला, अध्यक्ष, यूथ पावर एसोसिएशन एवं प्रो. ओमप्रकाश सिंह, प्राचार्य दिग्विजयनाथ पी.जी. कॉलेज  की उपस्थिति में समझौता ज्ञापन (MoU) पर हस्ताक्षर हुआ।
    इस अवसर पर महाविद्यालय के मुख्य नियंता प्रो धीरेंद्र सिंह, डॉ विवेक शाही, डॉ विवेकानन्द शुक्ला,  डॉ शैलेश सिंह, डॉ पवन पाण्डेय सहित यूथ पॉवर एसोसिएशन के नुक्कड़ नाटक इंचार्ज सार्थक शुक्ल एवं सदस्य दीपक कुमार यादव उपस्थित रहे`,

    visibility: true,
  },
  {
    id: 11,
    image: "/slide_images/mental_health_awawareness.jpg",
    name: "Mental Awarness",
    title: "Mental Awarness Program",
    quote: `[10/10/2023]-आज विश्व मानसिक स्वास्थ्य दिवस के अवसर पर मनोविज्ञान विभाग, दीनदयाल उपाध्याय गोरखपुर विश्वविद्यायल एवं यूथ पॉवर एसोसिएशन द्वारा विश्वविद्यालय के संवाद भवन में मानसिक स्वास्थ्य से सम्बन्धित जागरूकता कार्यक्रम का आयोजन किया गया`,

    visibility: true,
  },
  {
    id: 12,
    image: "/slide_images/workshop_group_photo.jpg",
    name: "Group Photo",
    title: "Group Photo 30 days Workshop closing Ceremony",
    quote:
      "In frame YPA head Shiv Prasad Shukla , Street Play Incharge Shardhak Shukla, Guest and participants",

    visibility: true,
  },
  {
    id: 13,
    image: "/slide_images/30_days_workshop_samapan.jpg",
    name: "Samapan Samaroh",
    title: "30 Days PDW Closing Ceremony start",
    quote: "in frame Synery Cancer Hospital Director  and Dr. Saurav Sir",

    visibility: true,
  },
  {
    id: 14,
    image: "/slide_images/cancer_screening_1.jpg",
    name: "DDU Cancer Awareness Program",
    title: "Cancer Screening Photo 1",
    quote:
      "Cancer awarness program held in collaboration with DDU Biotechnology Department , Synergy Cancer Hospital and YPA",

    visibility: true,
  },
  {
    id: 15,
    image: "/slide_images/cancer_screening_event.jpg",
    name: "susan andersen",
    title: "Cancer Awarness Event",
    quote:
      "Cancer awarness program held in collaboration with DDU Biotechnology Department , Synergy Cancer Hospital and YPA",

    visibility: true,
  },
  {
    id: 16,
    image: "/slide_images/cancer_screening_tandon_maam.jpg",
    name: "No name ",
    title: "Cancer Screening - Dr. Poonam Tandon (DDU Vice Chancelor)",
    quote:
      "Cancer awarness program held in collaboration with DDU Biotechnology Department , Synergy Cancer Hospital and YPA",

    visibility: true,
  },
  {
    id: 17,
    image: "/slide_images/cancer_screening_shiv_prasad_shukla_inframe.jpg",
    name: "name here",
    title: "Cancer Screening Event - Shiv Prasad Shukla on Mic",
    quote:
      "Cancer awarness program held in collaboration with DDU Biotechnology Department , Synergy Cancer Hospital and YPA",

    visibility: true,
  },
  {
    id: 18,
    image: "/slide_images/cancer_screening_2.jpg",
    name: "susan andersen",
    title: "Cancer Screening Photo 2",
    quote:
      "Cancer awarness program held in collaboration with DDU Biotechnology Department , Synergy Cancer Hospital and YPA",

    visibility: true,
  },
];

export default people;
