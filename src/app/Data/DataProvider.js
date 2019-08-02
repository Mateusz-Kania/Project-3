import React from 'react'
import {connect} from 'react-redux'
import dispatchLanguageData from "../Store/Actions/dispatchLanguageData";
import dispatchAddEstimate from "../Store/Actions/dispatchAddEstimate";
import getConfig from "./getConfig";

function DataProvider(props){

    let [estimatesConfig,setEstimatesConfig] = React.useState({});
    let [languageConfig,setLanguageConfig] = React.useState({});

    function downloadConfig(config){
        setEstimatesConfig(config.estimatesData);
        setLanguageConfig(config.languagesData);
    }
    getConfig().done(downloadData);

    function dispatchLanguageData(languageData){
        props.dispatch(
            {
                type: "SET_LANGUAGE_DATA",
                payload: {
                    languageData:languageData
                }
            }
        );
    }

    function dispatchEstimatesData(estimateData){

        store.dispatch(
            {
                type: "SET_ESTIMATES_DATA",
                payload: {
                    estimatesData:estimateData
                }
            }
        );
    }


    React.useEffect(() => {
        let interval;
        let intervalExist=false;

        if(!hovered) {
            intervalExist=true;
            interval = setInterval(() => {
                setShow(false);
            }, timeoutMS);
        }

        return () => {
            if(intervalExist) {
                clearInterval(interval);
            }
        }
    },[estimatesConfig]);

    React.useEffect(() => {
        let interval;
        let intervalExist=false;

        if(!hovered) {
            intervalExist=true;
            interval = setInterval(() => {
                setShow(false);
            }, timeoutMS);
        }

        return () => {}
    },[languageConfig]);


    return(
        <span>
            {props.children}
        </span>
    )

}