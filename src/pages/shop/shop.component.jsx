 import React from 'react';

 import SHOP_DATA from './shop.data.js';

 import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import { createPortal } from 'react-dom';

 class ShopPage extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             collections: SHOP_DATA
         }
        }

        render() {
           const {collections} = this.state;
           return (
           <div className='shop-page'>
            
            {collections.map(({id, ...othercollectionProps}) => (
                  <CollectionPreview key={id} {...othercollectionProps}/>
          ))}
            
            </div>);
        }
    }
            

export default ShopPage;
        
    

