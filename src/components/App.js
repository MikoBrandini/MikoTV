import _ from 'lodash';
import React, { Component } from 'react';
import LoadingContainer from './loading_container';
import SearchBar from './search_bar';
import VideoList from './video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './video_detail';
import keys from '../keys.js';

const API_KEY = keys.youtubeApiKey;

class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            videos: [],
            selectedVideo: null,
            loading: true
        };
        this.videoSearch('vaporwave 80s')
    }


    videoSearch(term) {
        YTSearch({
                key: API_KEY,
                term: term,
                max: '1-50'
            },
            (data) => {

                this.setState({
                    videos: data,
                    selectedVideo: data[0]
                })
            });
    }

      handleKeyPress (e) {

      if (e.charCode === 13) {
        e.preventDefault();
        }
          }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)

    }


    render() {
        if (this.state.loading === true) {

            return (<LoadingContainer/>)
        } else {

            const videoSearch = _.debounce((term) => {
                this.videoSearch(term)
            }, 300);



            return (
<div>
    <div className="upperLanding">
        <div className=" contentsUpperLanding">
            <SearchBar className="col-11" onSearchTermChange={videoSearch} onKeyPress={this.handleKeyPress} />
        </div>
    </div>
    <VideoDetail video={ this.state.selectedVideo}/>

    <div className="container">
            <VideoList onVideoSelect={selectedVideo=> this.setState({selectedVideo})} videos={this.state.videos} />
    </div>
</div>
            )
        }
    }

}

export default App;
