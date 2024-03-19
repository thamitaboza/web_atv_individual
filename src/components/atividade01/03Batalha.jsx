import {Children, cloneElement} from "react";

const Hero = ({name, arena}) => {
    return(
        <div>
            <h2>Sou Herói e meu nome é: {name} e me encontro na Arena {arena}</h2>
            <img 
                src="https://vtv1.mediacdn.vn/thumb_w/650/2022/12/27/271222-henry-cavill-the-witcher-1672113600370911010310-crop-1672113642608817750982.png"
                alt="Geralt de Rívia"
                style={{width:"240px"}}
                />
        </div>
    );
}

const Enemy = ({name}) => {
    return(
        <div>
            <h2>Sou inimigo e meu nome é: {name}</h2>
            <img 
                src="https://64.media.tumblr.com/5e3ed233bad15cd715c51f7c6d2a6fa6/tumblr_nlgwpbvBi51tk3rhmo1_1280.png"
                alt="Mycroft Holmes"
                style={{width:"240px"}}
                />
        </div>
    );
}

const Arena = ({name}) => {
    return(
        <div>
            <h2>Arena: {name}</h2>
            <Hero name="Geralt de Rívia" />
            <Enemy name="Mycroft Holmes"/>
        </div>
    )
}

const Arena2 = ({name, children}) => {
    return(
        <div>
            <h2>Arena: {name}</h2>
            {
            Children.map(
                children, (child) => {
                    return cloneElement(child, {arena:name})
                }
            )
           }
        </div>
    )
}

const World = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, Arena2, World}