



const images = require.context('../../Assets/Images/Invitation', true);

const invitationCommitteeImages = images.keys().map((image) => images(image));

const invitationNameList=["Dr. Mohammad Zahidur Rahman","Dr. Jugal Krishna Das","Dr. Mohammad Shorif Uddin","Dr. Israt Jahan","Dr. Md. Humayun Kabir"]
const invitationPostList=["Convener","Coordinator","Member","Member","Member"]
const invitationCommittee = "Invitation Committee";

export {invitationCommitteeImages,invitationNameList,invitationPostList,invitationCommittee};