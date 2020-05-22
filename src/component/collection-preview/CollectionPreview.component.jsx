import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item, i) => i < 4)
            .map(({id, ...otherItem}) => (
                <CollectionItem key={id} {...otherItem} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;