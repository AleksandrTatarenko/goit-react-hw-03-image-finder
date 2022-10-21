import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/LoadMore/LoadMore'
import css from './App.module.css';
import api from '../services/api';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null
  }

  async componentDidUpdate(prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      try {
        const images = await api.fetchImages(searchQuery, page);
        this.setState(prevState => {
          return { images: [...prevState.images, ...images] }
        });
      } catch (error) {
        this.setState({error: "Не получилось загрузить изображения"})
      } finally {
        this.setState({ isLoading: false });
      }
    }
    return null;
  }

  onSubmit = (searchQuery) => {
    this.setState({ searchQuery: [searchQuery.toString()] })
    this.setState({ isLoading: true });
  }

  onButtonClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 }
    })
    this.setState({ isLoading: true });
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading?<p>Loading...</p>:null}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length === 12 &&<LoadMore onClick={this.onButtonClick}/>}
    </div>
  );}
};
