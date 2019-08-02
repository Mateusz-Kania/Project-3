
import getData from "../../Data/getData";

export default function(store,url,estimateName){

    let newEstimatesData={...store.getState().estimatesData};


    function dispatch(estimateData){
        newEstimatesData[estimateName]=estimateData;

        store.dispatch(
            {
                type: "SET_ESTIMATES_DATA",
                payload: {
                    estimatesData:newEstimatesData
                }
            }
        );
    }

    getData(url).done(dispatch)
}

