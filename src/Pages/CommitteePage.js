import React, {Fragment} from 'react';
import Committee from "../Components/Committee";
import {
    executiveCommittee,
    executiveCommitteeImages,
    executiveNameList,
    executivePostList
} from "../Components/Context/Committee";
import TopMenu from "../Components/TopMenu";

function CommitteePage(props) {


    const devCommitteeName = "Web Development Committee";

    const othersCommitteeName = "Others Committee";

    return (
        <Fragment>
            <TopMenu/>
            <Committee imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={executiveCommittee}/>
            <Committee imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={devCommitteeName}/>
            <Committee imageUrls={executiveCommitteeImages} executiveNameList={executiveNameList} executivePostList={executivePostList} committeeName={othersCommitteeName}/>
        </Fragment>
    );
}

export default CommitteePage;
