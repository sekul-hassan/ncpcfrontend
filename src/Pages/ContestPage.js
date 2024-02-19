import React, { Fragment, useState } from 'react';
import TopMenu from "../Components/TopMenu";
import PreliminaryPage from "../Pages/PreliminaryPage";
import OnsitePage from "../Pages/OnsitePage";

function ContestPage(props) {
    const items = [
        { id: 1, name: 'Preliminary Contest' },
        { id: 2, name: 'Onsite Contest' },
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
                    activeItem?.id == 1 ? <PreliminaryPage /> :
                        activeItem?.id == 2 ? <OnsitePage  /> : ''

                }
            </Fragment>
        </>
    );
}

export default ContestPage;


