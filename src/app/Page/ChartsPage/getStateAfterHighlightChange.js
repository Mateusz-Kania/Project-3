export default function(currentState,hID=null){

    function checkHighlighted(element){
        let newElement={
            ...element
        };
        if(newElement.key===hID){
            newElement.highlighted=true;
        }
        else{
            newElement.highlighted=false;
        }
        return newElement;
    };


    return currentState.map(checkHighlighted);


}