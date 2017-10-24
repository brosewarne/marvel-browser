import React from "react";

export const CharacterImage = ({ character, imgSize="portrait_medium", link=null }) => {
    const { path, extension } = character.thumbnail;
    const imageUrl = `${path}/${imgSize}.${extension}`;
    return (
        <picture>
            <source srcSet={imageUrl} media="(min-width: 600px)" />
            <img src={imageUrl} alt={character.name} />
        </picture>
    )
};
