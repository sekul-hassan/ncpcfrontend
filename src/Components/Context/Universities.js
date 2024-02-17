const items = [
    {"id": 1, "name": "University of Dhaka"},
    {"id": 2, "name": "University of Rajshahi"},
    {"id": 3, "name": "Bangladesh Agricultural University"},
    {"id": 4, "name": "Bangladesh University of Engineering & Technology"},
    {"id": 5, "name": "University of Chittagong"},
    {"id": 6, "name": "Jahangirnagar University"},
    {"id": 7, "name": "Islamic University, Bangladesh"},
    {"id": 8, "name": "Shahjalal University of Science & Technology"},
    {"id": 9, "name": "Khulna University"},
    {"id": 10, "name": "National University"},
    {"id": 11, "name": "Bangladesh Open University"},
    {"id": 12, "name": "Bangabandhu Sheikh Mujib Medical University"},
    {"id": 13, "name": "Bangabandhu Sheikh Mujibur Rahman Agricultural University"},
    {"id": 14, "name": "Hajee Mohammad Danesh Science & Technology University"},
    {"id": 15, "name": "Mawlana Bhashani Science & Technology University"},
    {"id": 16, "name": "Patuakhali Science And Technology University"},
    {"id": 17, "name": "Sher-e-Bangla Agricultural University"},
    {"id": 18, "name": "Chittagong University of Engineering & Technology"},
    {"id": 19, "name": "Rajshahi University of Engineering & Technology"},
    {"id": 20, "name": "Khulna University of Engineering & Technology"},
    {"id": 21, "name": "Dhaka University of Engineering & Technology"},
    {"id": 22, "name": "Noakhali Science & Technology University"},
    {"id": 23, "name": "Jagannath University"},
    {"id": 24, "name": "Comilla University"},
    {"id": 25, "name": "Jatiya Kabi Kazi Nazrul Islam University"},
    {"id": 26, "name": "Chittagong Veterinary and Animal Sciences University"},
    {"id": 27, "name": "Sylhet Agricultural University"},
    {"id": 28, "name": "Jessore University of Science & Technology"},
    {"id": 29, "name": "Pabna University of Science and Technology"},
    {"id": 30, "name": "Begum Rokeya University, Rangpur"},
    {"id": 31, "name": "Bangladesh University of Professionals"},
    {"id": 32, "name": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University"},
    {"id": 33, "name": "Bangladesh University of Textiles"},
    {"id": 34, "name": "University of Barishal"},
    {"id": 35, "name": "Rangamati Science and Technology University"},
    {"id": 36, "name": "Bangabandhu Sheikh Mujibur Rahman Maritime University, Bangladesh"},
    {"id": 37, "name": "Islamic Arabic University"},
    {"id": 38, "name": "Chittagong Medical University"},
    {"id": 39, "name": "Rajshahi Medical University"},
    {"id": 40, "name": "Rabindra University, Bangladesh"},
    {"id": 41, "name": "Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh"},
    {"id": 42, "name": "Sheikh Hasina University"},
    {"id": 43, "name": "Khulna Agricultural University"},
    {"id": 44, "name": "Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University"},
    {"id": 45, "name": "Sylhet Medical University"},
    {"id": 46, "name": "Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace University (BSMRAAU)"},
    {"id": 47, "name": "Chandpur Science and Technology University"},
    {"id": 48, "name": "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj"},
    {"id": 49, "name": "Hobiganj Agricultural University"},
    {"id": 50, "name": "Sheikh Hasina Medical University, Khulna"},
    {"id": 51, "name": "Kurigram Agricultural University"},
    {"id": 52, "name": "Sunamganj Science and Technology University"},
    {"id": 53, "name": "Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Pirojpur"},
    {"id": 54, "name": "Bangabandhu Sheikh Mujibur Rahman University, Naogaon"},
    {"id": 55, "name": "Mujibnagar University, Meherpur"},
    {"id": 56, "name": "North South University"},
    {"id": 57, "name": "University of Science & Technology Chittagong"},
    {"id": 58, "name": "Independent University, Bangladesh"},
    {"id": 59, "name": "Central Women's University"},
    {"id": 60, "name": "International University of Business Agriculture & Technology"},
    {"id": 61, "name": "International Islamic University Chittagong"},
    {"id": 62, "name": "Ahsanullah University of Science and Technology"},
    {"id": 63, "name": "American International University-Bangladesh"},
    {"id": 64, "name": "East West University"},
    {"id": 65, "name": "University of Asia Pacific"},
    {"id": 66, "name": "Gono Bishwabidyalay"},
    {"id": 67, "name": "The People's University of Bangladesh"},
    {"id": 68, "name": "Asian University of Bangladesh"},
    {"id": 69, "name": "Dhaka International University"},
    {"id": 70, "name": "Manarat International University"},
    {"id": 71, "name": "BRAC University"},
    {"id": 72, "name": "Bangladesh University"},
    {"id": 73, "name": "Leading University"},
    {"id": 74, "name": "BGC Trust University Bangladesh"},
    {"id": 75, "name": "Sylhet International University"},
    {"id": 76, "name": "University of Development Alternative"},
    {"id": 77, "name": "Premier University"},
    {"id": 78, "name": "Southeast University"},
    {"id": 79, "name": "Daffodil Institute of IT (DIIT)"},
    {"id": 80, "name": "Stamford University Bangladesh"},
    {"id": 81, "name": "State University of Bangladesh (SUB)"},
    {"id": 82, "name": "City University"},
    {"id": 83, "name": "Prime University"},
    {"id": 84, "name": "Northern University Bangladesh"},
    {"id": 85, "name": "Southern University Bangladesh"},
    {"id": 86, "name": "Green University of Bangladesh"},
    {"id": 87, "name": "Pundra University of Science & Technology"},
    {"id": 88, "name": "World University of Bangladesh"},
    {"id": 89, "name": "Shanto-Mariam University of Creative Technology"},
    {"id": 90, "name": "The Millennium University"},
    {"id": 91, "name": "Eastern University"},
    {"id": 92, "name": "Metropolitan University"},
    {"id": 93, "name": "Uttara University"},
    {"id": 94, "name": "United International University"},
    {"id": 95, "name": "University of South Asia"},
    {"id": 96, "name": "Victoria University of Bangladesh"},
    {"id": 97, "name": "Bangladesh University of Business & Technology"},
    {"id": 98, "name": "Presidency University"},
    {"id": 99, "name": "University of Information Technology & Sciences"},
    {"id": 100, "name": "Primeasia University"},
    {"id": 101, "name": "Royal University of Dhaka"},
    {"id": 102, "name": "University of Liberal Arts Bangladesh"},
    {"id": 103, "name": "Atish Dipankar University of Science and Technology"},
    {"id": 104, "name": "Bangladesh Islami University"},
    {"id": 105, "name": "ASA University Bangladesh"},
    {"id": 106, "name": "East Delta University"},
    {"id": 107, "name": "European University of Bangladesh"},
    {"id": 108, "name": "Varendra University"},
    {"id": 109, "name": "Hamdard University Bangladesh"},
    {"id": 110, "name": "BGMEA University of Fashion & Technology(BUFT)"},
    {"id": 111, "name": "North East University Bangladesh"},
    {"id": 112, "name": "First Capital University of Bangladesh"},
    {"id": 113, "name": "Ishakha International University, Bangladesh"},
    {"id": 114, "name": "Z.H Sikder University of Science & Technology"},
    {"id": 115, "name": "Exim Bank Agricultural University, Bangladesh"},
    {"id": 116, "name": "North Western University"},
    {"id": 117, "name": "Khwaja Yunus Ali University"},
    {"id": 118, "name": "Sonargaon University"},
    {"id": 119, "name": "Feni University"},
    {"id": 120, "name": "Britannia University"},
    {"id": 121, "name": "Port City International University"},
    {"id": 122, "name": "Bangladesh University of Health Sciences"},
    {"id": 123, "name": "Chittagong Independent University"},
    {"id": 124, "name": "Notre Dame University Bangladesh"},
    {"id": 125, "name": "Times University, Bangladesh"},
    {"id": 126, "name": "North Bengal International University"},
    {"id": 127, "name": "Fareast International University"},
    {"id": 128, "name": "Rajshahi Science & Technology University (RSTU), Natore"},
    {"id": 129, "name": "Sheikh Fazilatunnesa Mujib University"},
    {"id": 130, "name": "Cox's Bazar International University"},
    {"id": 131, "name": "R. P. Shaha University"},
    {"id": 132, "name": "German University Bangladesh"},
    {"id": 133, "name": "Global University Bangladesh"},
    {"id": 134, "name": "CCN University of Science & Technology"},
    {"id": 135, "name": "Bangladesh Army University of Science and Technology(BAUST), Saidpur"},
    {"id": 136, "name": "Bangladesh Army University of Engineering and Technology (BAUET), Qadirabad"},
    {"id": 137, "name": "Bangladesh Army International University of Science & Technology(BAIUST), Comilla"},
    {"id": 138, "name": "The International University of Scholars"},
    {"id": 139, "name": "Canadian University of Bangladesh"},
    {"id": 140, "name": "N.P.I University of Bangladesh"},
    {"id": 141, "name": "Northern University of Business & Technology, Khulna"},
    {"id": 142, "name": "Rabindra Maitree University, Kushtia"},
    {"id": 143, "name": "University of Creative Technology, Chittagong"},
    {"id": 144, "name": "Central University of Science and Technology"},
    {"id": 145, "name": "Tagore University of Creative Arts, Uttara, Dhaka, Bangladesh"},
    {"id": 146, "name": "University of Global Village"},
    {"id": 147, "name": "Rupayan A.K.M Shamsuzzoha University(Academic programs have not yet started)"},
    {"id": 148, "name": "Anwer Khan Modern University"},
    {"id": 149, "name": "ZNRF University of Management Sciences"},
    {"id": 150, "name": "Ahsania Mission University of Science and Technology"},
    {"id": 151, "name": "Khulna Khan Bahadur Ahsanullah University"},
    {"id": 152, "name": "Bandarban University"},
    {"id": 153, "name": "Shah Makhdum Management University, Rajshahi(Academic programs have not yet started)"},
    {"id": 154, "name": "Trust University, Barishal"},
    {"id": 155, "name": "International Standard University"},
    {"id": 156, "name": "University of Brahmanbaria"},
    {"id": 157, "name": "University of Skill Enrichment and Technology"},
    {"id": 158, "name": "Microland University of Science and Technology(Academic Programs have not yet started)"},
    {"id": 159, "name": "R.T.M Al-Kabir Technical University"},
    {"id": 160, "name": "Sheikh Hasina University of Science and Technology"},
    {"id": 161, "name": "Chattogram BGMEA University of Fashion and Technology"},
    {"id": 162, "name": "Bangladesh Army University of Science and Technology, Khulna"},
    {"id": 163, "name": "Teesta University, Rangpur"},
    {"id": 164, "name": "Lalon University of Science and Arts"},
    {"id": 165, "name": "IBAIS University"},
    {"id": 166, "name": "The University of Comilla"},
    {"id": 167, "name": "Queens University"},
    {"id": 168, "name": "Islamic University of Technology, Gazipur"},
    {"id": 169, "name": "Asian University for Women"},
    {"id": 170, "name": "South Asian University"},
    {"id": 171, "name": "Dhaka College"},
    {"id": 172, "name": "City College"},
    {"id": 173, "name": "Eden College"},
    {"id": 174, "name": "IOI"},
    {"id": 175, "name": "Hobigonj polytechnic institute"},
    {"id": 176, "name": "Chandpur polytechnic institute"},
    {"id": 177, "name": "Kurigram polytechnic institute"},
    {"id": 178, "name": "Jhenaidah polytechnic institute"},
    {"id": 179, "name": "Lakshmipur polytechnic institute"},
    {"id": 180, "name": "Narsingdi polytechnic institute"},
    {"id": 181, "name": "Munshiganj polytechnic institute"},
    {"id": 182, "name": "Borguna polytechnic institute"},
    {"id": 183, "name": "Chapai Nawabganj polytechnic institute"},
    {"id": 184, "name": "Magura polytechnic institute"},
    {"id": 185, "name": "Kishoreganj polytechnic institute"},
    {"id": 186, "name": "Moulvibazar polytechnic institute"},
    {"id": 187, "name": "BS polytechnic institute kaptai"},
    {"id": 188, "name": "Feni computer institute"},
    {"id": 189, "name": "Dhaka Polytechnic Institute"},
    {"id": 190, "name": "Comilla Polytechnic Institute"},
    {"id": 191, "name": "Kushtia polytechnic institute"},
    {"id": 192, "name": "Khulna polytechnic institute"},
    {"id": 193, "name": "Chittagong polytechnic institute"},
    {"id": 194, "name": "Dinajpur polytechnic institute"},
    {"id": 195, "name": "Pabna polytechnic institute"},
    {"id": 196, "name": "Faridpur polytechnic institute"},
    {"id": 197, "name": "Bogra polytechnic institute"},
    {"id": 198, "name": "Barisal polytechnic institute"},
    {"id": 199, "name": "Mymensingh polytechnic institute"},
    {"id": 200, "name": "Jessore polytechnic institute"},
    {"id": 201, "name": "Rangpur polytechnic institute"},
    {"id": 202, "name": "Rajshahi polytechnic institute"},
    {"id": 203, "name": "Sylhet polytechnic institute"},
    {"id": 204, "name": "Feni polytechnic institute"},
    {"id": 205, "name": "Patuakhali polytechnic institute"},
    {"id": 206, "name": "Tangail polytechnic institute"},
    {"id": 207, "name": "Mahila polytechnic institute, Dhaka"},
    {"id": 208, "name": "Institute of glass and ceramics, dhaka"},
    {"id": 209, "name": "Graphics arts institute"},
    {"id": 210, "name": "Bangladesh survey institute, Comilla"},
    {"id": 211, "name": "Engineering and survey institute, Rajshahi"},
    {"id": 212, "name": "Bangladesh institute of marine technology"},
    {"id": 213, "name": "Mahila polytechnic institute, Chittagong"},
    {"id": 214, "name": "Mahila polytechnic institute, Rajshahi"},
    {"id": 215, "name": "Mahila polytechnic institute, Khulna"},
    {"id": 216, "name": "Shariatpur polytechnic institute"},
    {"id": 217, "name": "Thakurgaon polytechnic institute"},
    {"id": 218, "name": "Naogaon polytechnic institute"},
    {"id": 219, "name": "Sherpur polytechnic institute, Sherpur"},
    {"id": 220, "name": "Brahmanbaria polytechnic institute"},
    {"id": 221, "name": "Coxbazar polytechnic institute"},
    {"id": 222, "name": "Satkhira polytechnic institute"},
    {"id": 223, "name": "Sirajganj polytechnic institute"},
    {"id": 224, "name": "Gopalganj polytechnic institute"},
    {"id": 225, "name": "Bhola polytechnic institute"},
    {"id": 226, "name": "Chandpur polytechnic institute"},
    {"id": 227, "name": "Kurigram polytechnic institute"},
    {"id": 228, "name": "Jhenaidah polytechnic institute"},
    {"id": 229, "name": "Lakshmipur polytechnic institute"},
    {"id": 230, "name": "Narsingdi polytechnic institute"},
    {"id": 231, "name": "Munshiganj polytechnic institute"},
    {"id": 232, "name": "Borguna polytechnic institute"},
    {"id": 233, "name": "Chapai Nawabganj polytechnic institute"},
    {"id": 234, "name": "Magura polytechnic institute"},
    {"id": 235, "name": "Kishoreganj polytechnic institute"},
    {"id": 236, "name": "Moulvibazar polytechnic institute"},
    {"id": 237, "name": "BS polytechnic institute kaptai"},
    {"id": 238, "name": "Feni computer institute"},
    {"id": 239, "name": "Sylhet Engineering College"},
    {"id": 240, "name": "Institute Technology (IST)"},
    {"id": 241, "name": "Rangpur Engineering College"},
    {"id": 242, "name": "Tejgaon College"},
    {"id": 243, "name": "Military Institute of Science and Technology (MIST)"},
    {"id": 244, "name": "Institute of Science and Technology"},
    {"id": 245, "name": "Daffodil International University"},
    {"id": 246, "name": "Dhaka City College"},
    {"id": 247, "name": "Faridpur Engineering College"},
    {"id": 248, "name": "National Institute of Textile Engineering and Research"},
]

export default items;