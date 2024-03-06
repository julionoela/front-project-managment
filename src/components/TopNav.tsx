import { useState } from "react";
import SubMenu from "./SubMenu";

const TopNav = () => {
    const [isShowMenuCreate, setIsShowMenuCreate] = useState(false);
    
    const toogleMenu = () => {
        setIsShowMenuCreate((isShowMenuCreate) => !isShowMenuCreate);
    }

    return (
        <div className="top-nav">
            <div className="top-nav-flex-items content-btn-create">
                <button className="btn-create" onClick={toogleMenu}>
                    <span className="icone-btn-create">+</span>
                    <span className="label-btn-create">Créer</span>
                </button>
            </div>
            <SubMenu isShowMenuCreate = {isShowMenuCreate} />
            <input type='text' placeholder="Rechercher"  className='top-nav-flex-items input-search' />
            <div className="top-nav-flex-items trial-30">
                30 jours d'essai restants
            </div>
            <button className="btn-information">
                Ajouter des informations de facturation
            </button>
            <div className="avatar bottom">
                JR
            </div>
        </div>
    )
}

export default TopNav;