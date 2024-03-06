import React from 'react';
import {useDispatch} from 'react-redux';
import {toogleWindowNewTask} from '../app/features/taskSlice';

interface SubMenuProps {
    isShowMenuCreate:boolean
};

const SubMenu:React.FC<SubMenuProps> = (isShowMenuCreate) => {
    const dispatch = useDispatch();

    return (        
        <div className={isShowMenuCreate ? "topnav-submenu" : 'display-none '}>
            <div className="topnav-submenu-item" onClick={() => dispatch(toogleWindowNewTask())}>Tâche</div>
            <div className="topnav-submenu-item">Projet</div>
            <div className="topnav-submenu-item">Message</div>
            <div className="topnav-submenu-item">Portfeuille</div>
        </div>
    );
}

export default SubMenu;