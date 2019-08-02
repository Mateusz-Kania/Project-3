
import uuidv4 from 'uuid/v4';

export default function(data){
    if(!data.estimate1){
        return [];
    }

    if(!data.estimate1.results){
        return [];
    }

    function createIndex(object){
        return{
            ...object,
            key:uuidv4(),
            highlighted:false,
        };
    }

    return data.estimate1.results.map(createIndex);
}

