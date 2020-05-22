import React from 'react';
import SHOP_DATA from './data';

import CollectionPreview from '../../component/collection-preview/CollectionPreview.component';

class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            collections:SHOP_DATA,
        }
    }


    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {collections.map(({id,...coll}) => (
                    <CollectionPreview key={id} {...coll} />
                ))}
            </div>
        );
    }
}

export default Shop;