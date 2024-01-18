




const images = require.context('../../Assets/Images/Cultural', true);

const culturalCommitteeImages = images.keys().map((image) => images(image));

const culturalNameList=["Sarnali Basak","Samsun Nahar Khandakar","Amina Khatun","Bulbul Ahammad","Nadia Afrin Ritu"]
const culturalPostList=["Convener","Coordinator","Member","Member","Member"]

const culturalCommittee = "Cultural Committee";

export {culturalCommitteeImages,culturalNameList,culturalPostList,culturalCommittee};