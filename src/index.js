import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';

const API_KEY = 'AIzaSyBKf1jgFgyaTflZpjkaRTB-1tNTQTXVuP0';

//YTSearch({key:API_KEY, term:'surfboard'}, function(data){
//   console.log(data);
//});
//create a new component, This component should produce some HTML.
//const App = () =>{
//    return (
//        <div>
//        <SearchBar />
//        </div>
//    )
//}

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos:[],
            selectedVideo:null
        };
        this.videoSearch('Ti6');

    }

    videoSearch(term){
        console.log(this);
        YTSearch({key:API_KEY, term:term}, (videos)=>{
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });

        });
    }

    render(){
        return(
            <div>
                <SearchBar onSearchTermChange={term =>this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo =>this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));