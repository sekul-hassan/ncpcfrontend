import React, {Fragment, useEffect, useState} from 'react';
import TopMenu from "../Components/TopMenu";
import Proces from "../Components/Proces";
import List from "../Components/List";
import axios from "axios";


function TeamListPage(props) {
    const items = [
        { id: 1, name: 'Registration Process' },
        // { id: 2, name: 'Team List' },
    ];
    const [activeItem, setActiveItem] = useState(items[0]);

    const onSelectCurrentLink = (item) => {
        setActiveItem(item);
    };
    const [teamList,setTeamList] = useState(null)

    useEffect(()=>{
        axios.get("https://pc.cse.juniv.edu/api/findTeam").then((res)=>{
            setTeamList(res.data);
        }).catch((er)=>{

        })
    })
    return (
        <Fragment>
            <TopMenu/>
            <div className='tab_wrapper mt-0 p-3'>
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
                activeItem?.id === 1 ? (<Proces/>) :
                    // activeItem?.id === 2 ? (<List teamList={teamList}/>) :
                        null
            }
        </Fragment>
    );
}

export default TeamListPage;
