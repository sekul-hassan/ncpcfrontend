

const images = require.context('../../Assets/Images/WebCommittee', true);

const webCommitteeImages = images.keys().map((image) => images(image));



const webCommitteeNameList=[
    "Dr. Abu Sayed Md. Mostafizur Rahaman",
    "Anup Majumder",
    "Nadia Afrin Ritu",
    "Md. Masum Bhuiyan"
];


const webCommitteePostList= [
    "Convener",
    "Coordinator",
    "Member",
    "Member"
];

const webCommittee = "Registration and Website Management Committee";

export {webCommitteeNameList,webCommitteePostList,webCommittee,webCommitteeImages};