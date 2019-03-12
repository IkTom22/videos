import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videos: [] }

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
    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.

            </div>
        );
    }
}

export default App;