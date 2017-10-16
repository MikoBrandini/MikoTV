
import _ from 'lodash';
import PricingTables from './pricing_tables';
import React, {Component } from 'react';
import AlertContainer from 'react-alert';
import SearchBar from './search_bar';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';
import keys from '../keys.js';

const API_KEY = keys.youtubeApiKey;

  class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      this.videoSearch('vaporwave 80s')
    }


    alertOptions = {
    offset: 10,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

    showAlert = () => {
    this.msg.show('Website Under Construction.', {
      time: 0,
      type: 'success',
      icon: <img src="./images/logo.png" width="32px"  height="32px" alt="alt for alert modal"/>
    })
  }


    videoSearch(term){

      YTSearch({key: API_KEY, term: term, max: '1-50'},
        (data) => {

         this.setState({
          videos: data,
          selectedVideo: data[0]
        })
        });

    }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    console.log(this.state.selectedVideo)
    return (
     <div>
     <div className="upperLanding">
      <div className=" contentsUpperLanding">
      <SearchBar className="col-11" onSearchTermChange={videoSearch}/>
            </div>
      </div>
      <VideoDetail video= {this.state.selectedVideo}/>

      <div className="container">
      <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}
      />
    </div>
    </div>
      )
  }

}

export default App;
