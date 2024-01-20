const images = require.context('../../Assets/Images/Executive', true);
const executiveCommitteeImages = images.keys().map((image) => images(image));

const executiveNameList = [
    "Prof. Dr. Md. Golam Moazzam",
    "Mohammad Ashraful Islam",
    "Prof. Dr. Jugal Krishna Das",
    "Prof. Dr. Md. Imdadul Islam",
    "Prof. Dr. Md. Abul Kalam Azad",
    "Prof. Dr. ASM Mostafizur Rahaman",
    "Prof. Dr. Md. Ezharul Islam",
    "Bulbul Ahammad",
    "Anup Majumder"
]
const executivePostList = [
    "Convener",
    "Coordinator",
    "Member",
    "Member",
    "Member",
    "Member",
    "Member",
    "Member",
    "Member"
];

const executiveCommittee = "Executive Committee";

export {executiveCommitteeImages,executivePostList,executiveNameList,executiveCommittee}