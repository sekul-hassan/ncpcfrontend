
const images = require.context('../../Assets/Images/Logistic', true);

const logisticCommitteeImages = images.keys().map((image) => images(image));

const logisticNameList=[
    "Prof. Dr. Md. Imdadul Islam",
    "Prof. Dr. Md. Golam Moazzam",
    "Prof. Dr. ASM Mostafizur Rahaman",
    "Prof. Dr. Md. Ezharul Islam",
    "Anup Majumder", "Bulbul Ahammad"
];
const logisticPostList=[
    "Convenor",
    "Coordinator",
    "Member",
    "Member",
    "Member",
    "Member"
];
const logisticCommittee = "Logistic Committee";

export {logisticCommitteeImages,logisticNameList,logisticPostList,logisticCommittee};