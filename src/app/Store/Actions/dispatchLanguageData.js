
import getLanguage from "../../Data/getLanguage";

export default function(store,url){

    function dispatch(languageData){
        store.dispatch(
            {
                type: "SET_LANGUAGE_DATA",
                payload: {
                    languageData:languageData
                }
            }
        );
    }

    getLanguage(url).done(dispatch)
}

