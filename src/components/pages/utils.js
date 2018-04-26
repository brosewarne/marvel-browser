import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';


const urlTitles = {
    detail: 'Details',
    comiclink: 'Comics',
    wiki: 'Wiki'
};

export const getDetailLinks = (item) => {
    if (!item.urls) {
        return [];
    }

    return item.urls.map((urlObj) => {
        return (
            <Button color="secondary" variant="raised">
                <Link target="_blank" href={urlObj.url} to={urlObj.url} >{urlTitles[urlObj.type]}</Link>
            </Button>
        );
    });
};
