import React, { Fragment, useState } from 'react';
import Committee from "../Components/Committee";
import { executiveCommittee, executiveCommitteeImages, executiveNameList, executivePostList } from "../Components/Context/ExecutiveCommittee";
import { webCommitteeNameList, webCommitteePostList, webCommittee, webCommitteeImages } from "../Components/Context/WebDevelopmentCommittee";
import { transportCommitteeImages, transportCommitteeNameList, transportCommitteePostList, transportCommittee } from "../Components/Context/Transport";
import { invitationCommitteeImages, invitationNameList, invitationPostList, invitationCommittee } from "../Components/Context/Invitation";
import { foodCommitteeImages, foodNameList, foodPostList, footCommittee } from "../Components/Context/Food";
import { culturalCommitteeImages, culturalNameList, culturalPostList, culturalCommittee } from "../Components/Context/Cultural";
import { publicationCommitteeImages, publicationNameList, publicationPostList, publicationCommittee } from "../Components/Context/Publication";
import { logisticCommitteeImages, logisticNameList, logisticPostList, logisticCommittee } from "../Components/Context/Logistic";
import TopMenu from "../Components/TopMenu";
import Sponsor from '../Components/Sponsor';
import SponsorCard from '../MyComponents/GoldSponsorCard';
import sponsorMockImage from "../Assets/Images/sponsor.png";
import PlatinumSponsorCard from '../MyComponents/PlatinumSponsorCard';
import GoldSponsorCard from '../MyComponents/GoldSponsorCard';
import SilverSponsorCard from '../MyComponents/SilverSponsorCard';
import OtherSponsorCard from '../MyComponents/OtherSponsorCard';

function OurSponsors(props) {
    const items = [
        { id: 1, name: 'Platinum' },
        { id: 2, name: 'Gold' },
        { id: 3, name: 'Silver' },
        { id: 4, name: 'Other' },
    ];
    const [activeItem, setActiveItem] = useState(items[0]);
    const onSelectCurrentLink = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <Fragment>
                <TopMenu />
                <div className='tab_wrapper'>
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onSelectCurrentLink(item)}
                            className={`single_tab ${activeItem?.id === item.id ? 'active' : ''}`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>

                {
                    activeItem?.id == 1 ? <PlatinumSponsorCard/> :
                        activeItem?.id == 2 ? <GoldSponsorCard/> :
                            activeItem?.id == 3 ? <SilverSponsorCard/> : 
                                activeItem?.id == 4 ? <OtherSponsorCard/> : ''

                }
            </Fragment>
        </>
    );
}

export default OurSponsors;


