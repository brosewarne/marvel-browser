import React, {Component} from "react";
import { CharacterImage } from "./character_image";

import "./character.css";

class CharacterPage extends Component {

    render() {
        const { name, description, comics, series, stories } = this.props.location.state.character;
        return (
            <div>
                <content className="characterPage">
                    <div className="characterProfile">
                        <h1 className="characterProfileTitle">{name}</h1>
                        <CharacterImage character={this.props.location.state.character} imgSize={"portrait_uncanny"} />
                        <p>{description}</p>
                        <p>{`${comics.available} Comics`}</p>
                        <p>{`${series.available} Series`}</p>
                        <p>{`${stories.available} Stories`}</p>
                    </div>
                </content>
            </div>
        )
    }
}

export { CharacterPage };
