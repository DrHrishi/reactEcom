import React from 'react';
import { connect } from 'react-redux';
import './collections-overview.styles.scss'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../Preview-collection/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)
const matchStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(matchStateToProps)(CollectionOverview);