import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    // it's either 'async const response = await ..' method ot fetch method
    onTermSubmit = async (term) => {
        // updated term from SearchBar will be print out
        // console.log(term); 
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // of all the response fdata I get, I only need response.data.items
        this.setState({ videos: response.data.items });
    };
    // selected video item
    onVideoSelect = (video) => {
        console.log('From the App!', video)
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

            </div>
        );
    }
}

export default App;