import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
//import devToolsEnhancer from 'remote-redux-devtools';
import DisplayDetection from './Listeners/DisplayDetection';
import scrollChange from './ScrollChange'
import displayChange from './DisplayChange'
import setLanguageData from './SetLanguageData'
import setEstimatesData from './SetEstimatesData'
import setConfig from './SetConfig'
import getConfig from "../Data/getConfig";
import dispatchLanguageData from "./Actions/dispatchLanguageData"
import dispatchAddEstimate from "./Actions/dispatchAddEstimate"


export default function(props) {
    let displayDetection = new DisplayDetection();
    let defaultLanguage='pl';

    const initialState = {
        ...displayDetection.getCurrentStatus(),
        config:{},
        estimatesData:{},
        languageData:{},
        currentLanguage:defaultLanguage,
    };


    function reducer(state = initialState, action) {
        let change ={};
        switch(action.type){
            case "DISPLAY_CHANGE":
                change = displayChange(action);
                return {...state,...change};
            case "SET_CONFIG":
                change = setConfig(action);
                return {...state,...change};
            case "SET_LANGUAGE_DATA":
                change= setLanguageData(action);
                return {...state,...change};
            case "SET_ESTIMATES_DATA":
                change= setEstimatesData(action);
                return {...state,...change};
            default:
                return state;
        }
    }

    const store = createStore(reducer);

    displayDetection.setStore(store);
    displayDetection.setListeners();


    function downloadData(config){
        dispatchLanguageData(store,config.lang['pl'].url);

        for (let name in config.estimates) {
            dispatchAddEstimate(store,config.estimates[name].url,name);
        }
    }

    getConfig().done(downloadData);





    return(
        <Provider store={store}>{props.children}</Provider>
    );
}
