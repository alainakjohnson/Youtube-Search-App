import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from "./components/search_bar";
import YTSearch from 'youtube-api-search';
import registerServiceWorker from './registerServiceWorker';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import "./index.css"; // in addition, import our own CSS 

const API_KEY = 'AIzaSyBqiPN9f0LoYUfEFf8DxwMhb2sF-ad_3-I';

class App extends Component {
     constructor(props) {
        super(props);

        this.state = { videos: [] };
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
         this.videoSearch("surfboards");
    }
    
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            // ES6 syntax for this.setState({ videos: videos});
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar onSearchTermSearch={term => this.videoSearch(term)}/>
                <div className="row">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                        // callback function
                        onVideoSelect={selectedVideo =>
                            this.setState({ selectedVideo })
                        }
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();