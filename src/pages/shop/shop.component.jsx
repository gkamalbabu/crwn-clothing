import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} element={<CollectionsOverview/>} />
    <Route path={`${match.path}/:collectionId`} element={<CollectionPage/>} />
  </div>
);

export default ShopPage;