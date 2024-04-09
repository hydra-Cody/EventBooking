import Title from "./TitleComponent";

const HeaderCompoenet = () => {
    return (
        <div className="header">
            <div className="top-header">
                <Title />
                <div>
                    <button>Categories</button>
                    <input />
                </div>
                <div>
                    <button>Faviorites</button>
                    <button>Signin</button>
                </div>
            </div>
            <div className="bottom-header">
                <button>Location</button>
                <div className="nav-item">
                    <ul >
                        <li>Live show</li>
                        <li>Stream</li>
                        <li>Movies</li>
                        <li>Plays</li>
                        <li>Events</li>
                        <li>Sports</li>
                        <li>Actives</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default HeaderCompoenet;