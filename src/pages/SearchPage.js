import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './Response';
import { Link } from 'react-router-dom';
import Search from '../Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//AIzaSyAseKp7zwqfY5IPlLDDS-xBMiw7iuq92Zo

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;

  console.log(data);
  return (
    <div className='SearchPage'>
      <div className='searchPage_header'>
        <Link to='/'>
          <img
            className='searchPage_logo'
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'
            alt='logo'
          />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButtons />
          <div className='searchPage_options'>
            <div className='searchPage_optionsLeft'>
              <div className='searchPage_option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage_option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage_option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage_option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='searchPage_option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='searchPage_option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='searchPage_optionsRight'>
              <div className='searchPage_option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage_option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchPage_results'>
          <p className='searchPage_resultsCount'>
            About {data?.searchInformation.formattedTotalResults} results ({' '}
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage_result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className='searchPage_resultImage'
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt='searchImage'
                  />
                )}
                {item.displayLink}
              </a>
              <a className='searchPage_resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
