import PropTypes from 'prop-types';
import {Item, Image} from 'components/ImageGalleryItem/ImageGalleryItem.styled'

export const ImageGalleryItem = ({id, imageUrl, onClick}) => {
    return (<Item onClick={()=>onClick(id)}>
        <Image src={imageUrl} alt="" />
    </Item>);
}

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired
}