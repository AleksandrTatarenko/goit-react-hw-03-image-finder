import PropTypes from 'prop-types';
import { List } from 'components/ImageGallery/ImageGallery.styled'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => {
    return (<div>
        <List>
            {images.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        imageUrl={webformatURL}
                    />
                );
            })}
        </List>
    </div>
        
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ),  
}