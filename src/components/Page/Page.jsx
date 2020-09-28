import React, {useEffect, useState} from 'react';
import { useParams, useHistory, useLocation } from "react-router-dom";
import TransitionedBlock from "../HelperComponents/TransitionedBlock/TransitionedBlock";
import MovieTrailer from "movie-trailer";
import ReactPlayer  from 'react-player';
import PrevIcon from '../../assets/images/Arrow_1.png';

import "./Page.sass"

function Page() {

    const [state, setState] = useState({
        loading: true,
        page_data: null,
        video_link: '',
        error_trailer: '',
    });

    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
            fetch(`http://www.omdbapi.com/?apikey=8b47da7b&i=${params.id}&plot=full`)
                .then(res => res.json())
                .then(data => {
                        MovieTrailer(data.Title, data.Year)
                            .then(response => setState({...state, page_data: data, video_link: response, loading: false}))
                            .catch(error => setState({...state, page_data: data, error_trailer: error, loading: false}))
                    }
                )
                .catch(error => console.log(error))
    },[]);

    if (state.loading) return <TransitionedBlock classes="film_profile"/>;
    return (
        <TransitionedBlock classes="film_profile">
            <div className="trailer_wrapper">
               {state.error_trailer ?
                   alert(state.error_trailer)
                   :
                   <ReactPlayer
                    url={state.video_link}
                    controls
                    className='video'
                />}
            </div>
            <section className="info_wrapper">
                <div className="film_banner">
                    <span onClick={() => history.push(`${location.state.from}`)}><img src={PrevIcon} alt="previous page arrow"/> Back</span>
                    <img src={state.page_data.Poster} alt={state.page_data.Title + "poster"}/>
                    <div className="rating">IMDB Rating: <br/> <span>{state.page_data.imdbRating} / </span>10 </div>
                </div>
                <div className="film_info">
                    <h1>{state.page_data.Title}</h1>
                    <div className="detailed_info">
                        <span>Runtime: <strong>{state.page_data.Runtime}</strong></span>
                        <span>Genre: <strong>{state.page_data.Genre}</strong></span>
                        <span>Year: <strong>{state.page_data.Year}</strong></span>
                        <span>Type: <strong>{state.page_data.Type}</strong></span>
                        <span>{state.page_data.Plot}</span>
                    </div>
                </div>

            </section>
        </TransitionedBlock>
    );
}

export default Page;