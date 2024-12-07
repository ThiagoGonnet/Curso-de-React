import './App.css'

export function App () {
    return (
        <article className="tw-followCard">
            <header>
                <img alt="El avatar de Thiago Gonnet" src="https://media.licdn.com/dms/image/v2/D4D03AQG79GfguBWY9Q/profile-displayphoto-shrink_800_800/B4DZOCjJKJHUAc-/0/1733062072563?e=1738800000&v=beta&t=Y1x0v9UNlHM0ZRIEYX4CvKUqhCtPqYjM7KYEwifaG34"/>
                <div>
                    <strong>Thiago Gonnet</strong>
                    <span>@thiagogonnet</span>
                </div>
            </header>
            
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}