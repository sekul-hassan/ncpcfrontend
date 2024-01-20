
const images = require.context('../../Assets/Images/Food', true);

const foodCommitteeImages = images.keys().map((image) => images(image));

const foodNameList=[
    "Dr. Md. Golam Moazzam",
    "Dr. Md. Musfique Anwar",
    "Dr. Md Abul Kalam Azad",
    "Md. Masum Bhuiyan"
];
const foodPostList=[
    "Convener",
    "Coordinator",
    "Member",
    "Member"
];
const footCommittee = "Food Committee";

export {foodCommitteeImages,foodNameList,foodPostList,footCommittee};