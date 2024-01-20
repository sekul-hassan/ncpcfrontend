
const images = require.context('../../Assets/Images/Publication', true);

const publicationCommitteeImages = images.keys().map((image) => images(image));

const publicationNameList=[
    "Prof. Dr. Md Abul Kalam Azad",
    "Nadia Afrin Ritu",
    "Sabrina Sharmin",
    "Samsun Nahar Khandakar"
];
const publicationPostList=[
    "Convenor",
    "Coordinator",
    "Member",
    "Member"
];
const publicationCommittee = "Publication Committee";

export {publicationCommitteeImages,publicationNameList,publicationPostList,publicationCommittee};