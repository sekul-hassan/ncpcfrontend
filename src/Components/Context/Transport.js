

const images = require.context('../../Assets/Images/TransportCommittee', true);

const transportCommitteeImages = images.keys().map((image) => images(image));



const transportCommitteeNameList= [
    "Dr. Md. Ezharul Islam",
    "Bulbul Ahammad",
    "Dr. Morium Akter",
    "Md. Masum Bhuiyan"
];


const transportCommitteePostList = [
    "Convener",
    "Coordinator",
    "Member",
    "Member"
];


const transportCommittee = "Transport Committee";

export {transportCommitteeImages,transportCommitteeNameList,transportCommitteePostList,transportCommittee};