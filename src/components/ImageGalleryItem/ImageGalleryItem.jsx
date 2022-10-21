import PropTypes from 'prop-types';
import {Item, Image} from 'components/ImageGalleryItem/ImageGalleryItem.styled'

export const ImageGalleryItem = ({imageUrl}) => {
    return (<Item>
        <Image src={imageUrl} alt="" />
    </Item>);
}

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired
}