import React, {Fragment} from 'react';
import Committee from "../Components/Committee";
import {executiveCommittee, executiveCommitteeImages, executiveNameList, executivePostList} from "../Components/Context/ExecutiveCommittee";
import {webCommitteeNameList,webCommitteePostList,webCommittee,webCommitteeImages} from "../Components/Context/WebDevelopmentCommittee";
import {transportCommitteeImages,transportCommitteeNameList,transportCommitteePostList,transportCommittee} from "../Components/Context/Transport";
import {invitationCommitteeImages,invitationNameList,invitationPostList,invitationCommittee} from "../Components/Context/Invitation";
import {foodCommitteeImages,foodNameList,foodPostList,footCommittee} from "../Components/Context/Food";
import {culturalCommitteeImages,culturalNameList,culturalPostList,culturalCommittee} from "../Components/Context/Cultural";
import {publicationCommitteeImages,publicationNameList,publicationPostList,publicationCommittee} from "../Components/Context/Publication";
import {logisticCommitteeImages,logisticNameList,logisticPostList,logisticCommittee} from "../Components/Context/Logistic";
import TopMenu from "../Components/TopMenu";
import CommitteeTop from "../Components/CommitteeTop";

function CommitteePage(props) {


    return (
        <Fragment>
            <TopMenu/>
            <Committee imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={executiveCommittee}/>
            <Committee imageUrls={webCommitteeImages} executiveNameList={webCommitteeNameList} executivePostList={webCommitteePostList} committeeName={webCommittee}/>
            <Committee imageUrls={transportCommitteeImages} executiveNameList={transportCommitteeNameList} executivePostList={transportCommitteePostList} committeeName={transportCommittee}/>
            <Committee imageUrls={invitationCommitteeImages} executiveNameList={invitationNameList} executivePostList={invitationPostList} committeeName={invitationCommittee}/>
            <Committee imageUrls={foodCommitteeImages} executiveNameList={foodNameList} executivePostList={foodPostList} committeeName={footCommittee}/>
            <Committee imageUrls={culturalCommitteeImages} executiveNameList={culturalNameList} executivePostList={culturalPostList} committeeName={culturalCommittee}/>
            <Committee imageUrls={publicationCommitteeImages} executiveNameList={publicationNameList} executivePostList={publicationPostList} committeeName={publicationCommittee}/>
            <Committee imageUrls={logisticCommitteeImages} executiveNameList={logisticNameList} executivePostList={logisticPostList} committeeName={logisticCommittee}/>

        </Fragment>
    );
}

export default CommitteePage;
