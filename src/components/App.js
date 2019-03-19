import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onTermSubmit('sustanable house');

    }


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
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    // selected video item
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>

                    </div>

                </div>


            </div>
        );
    }
}

export default App;