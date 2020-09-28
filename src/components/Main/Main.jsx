import React, {useState, useContext, useEffect, useRef} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import { AppContext } from "../../context/appState";

import "../Main/Main.sass";



function Main() {

    const [state, setState] = useState({
        loading: true,
        search_response: null,
    });

    const { dispatch, dispatchSearch, dispatchSearchValue, search_data, search_value, dispatchPage, page } = useContext(AppContext);
    const history = useHistory();
    const location = useLocation();
    const prevPageRef = useRef();
    const prevPage = prevPageRef.current;

    useEffect(() => {
        if(search_data && search_data.Response === "True"){ // example for context
            setState({...state, search_response: search_data});
        }else if(typeof localStorage !== "undefined"){
            if(JSON.parse(localStorage.getItem('search_data')).hasOwnProperty('Search')){
                setState({...state, search_response: JSON.parse(localStorage.getItem('search_data'))});
            }
        }
        prevPageRef.current = page
    },[]);

    useEffect(() => {
        if(prevPage !== page){
            fetchData(search_value, page)
        }
    },[page]);

    const handleSearch = (e) => {
        dispatchPage(1, dispatch);
        dispatchSearchValue(e.target.value, dispatch);
        fetchData(e.target.value, page)
    };

    const fetchData = (value, page) => {
        fetch(`http://www.omdbapi.com/?apikey=8b47da7b&s=${value}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                    if(data.Response === "True") {
                        setState({...state, search_response: data});
                        dispatchSearch(data, dispatch);
                    }else{
                        dispatchSearch({}, dispatch);
                        setState({...state, search_response: null});
                    }
                }
            )
            .catch(error => console.log(error))
    };

    return (
        <Layout>
            <section className="search_container">
                <h2>Explore movies & series</h2>
                <div className="search_input">
                    <input
                        defaultValue={search_value ? search_value : localStorage.getItem('search_value')}
                        type="text"
                        placeholder="Search ..."
                        onChange={(e) => handleSearch(e)}
                    />
                </div>
            </section>
            {state.search_response ?
                <section className="search_result">
                {state.search_response && state.search_response.Search.map((film, index) =>
                    <div key={index} className="result_item"
                         onClick={() => history.push({pathname: `/film/${film.imdbID}`, state: {from: location.pathname}
                        })}>
                        <div className="item_name" >
                            {film.Poster === "N/A" ?
                                <div className="empty poster">No poster</div>
                                :
                                <img className="poster" src={film.Poster} alt="film poster"/>
                            }
                            <span>{film.Title}</span>
                        </div>
                        <div>
                            <span className="item_type">{film.Year}</span>
                            <span className="item_year">{film.Type}</span>
                        </div>
                    </div>
                )}
            </section>
            : null}
        </Layout>
    );
}

export default Main;