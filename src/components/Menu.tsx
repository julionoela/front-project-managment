const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>Accueil</li>
                <li>Mes tâches</li>
                <li>Boîte de reception</li>
            </ul>
            <div className="menu-help">
                <span className="invite">Inviter</span>
                <span>|</span>
                <div className="help">
                    <div className="help-symbol">?</div> 
                    <div className='help-label'>Aide</div>
                </div>
            </div>

        </div>
    )
}

export default Menu;