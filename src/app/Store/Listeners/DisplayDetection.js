//import {isMobile} from 'react-device-detect';

class DisplayDetection{
    constructor() {
        this.scrolledMenu=false;
        this.currentScrollMenuBreakpoint=1000;

        this.displayBreakpointsData = [
            {
                name: "small",
                minWidth: '0px',
                maxWidth: '639px',
            },
            {
                name: "medium",
                minWidth: '640px',
                maxWidth: '1200px',
            },
            {
                name: "big",
                minWidth: '1200px',
            },
        ];
        this.displayBreakpointsData.map(DisplayDetection.createQueriesForBreakpoint);
        this.setBreakpointListeners=this.setBreakpointListeners.bind(this);
        this.getCurrentStatus=this.getCurrentStatus.bind(this);
        this.setScrollListener=this.setScrollListener.bind(this);
    }

    setStore(store){
        this.store=store;
    }

    static createQueriesForBreakpoint(breakpoint){

        if(breakpoint.maxWidth){
            breakpoint.query = `(min-width:${breakpoint.minWidth}) and (max-width:${breakpoint.maxWidth})`;
        }
        else {
            breakpoint.query = `(min-width:${breakpoint.minWidth})`;
        }
    }

    setBreakpointListeners(breakpoint){
        let mqDisplaySize=window.matchMedia(breakpoint.query);

        mqDisplaySize.addListener((e)=>{
            if(e.matches){
               this.dispatchDisplaySize(breakpoint.name);
               //this.currentScrollMenuBreakpoint=breakpoint.scrolledMenuBreakpoint;
               //this.dispatchScrolledMenu(this.isScrolledMenuEnabled());
            }
        });


    }

    setListeners(){
        this.displayBreakpointsData.map(this.setBreakpointListeners);
        //window.addEventListener('scroll', this.setScrollListener); not added yet
    }

    setScrollListener(){
        let newScrolledMenuStatus = this.isScrolledMenuEnabled();
        if(!(newScrolledMenuStatus===this.scrolledMenu))
        {
            this.dispatchScrolledMenu(newScrolledMenuStatus);
            this.scrolledMenu=newScrolledMenuStatus;
        }


    }

    dispatchDisplaySize(size){
        this.store.dispatch(
            {
                type: "DISPLAY_CHANGE",
                payload: {
                    value: size
                }
            }
        );
    }

    dispatchScrolledMenu(enabled){
        this.store.dispatch(
            {
                type:"SCROLL_CHANGE",
                payload:{
                    value:enabled
                }
            }
        );
    }

    isScrolledMenuEnabled(){
        let scrollValue = (window.scrollY || document.documentElement.scrollTop);
        if(scrollValue>this.currentScrollMenuBreakpoint)
        {
            return true;
        }
        return false;
    }


    getCurrentStatus(){
        let currentDisplaySize='';
        let currentScrolledMenu=false;
        let self = this;

        function checkIfItsCurrent(breakpoint){
            let mq=window.matchMedia(breakpoint.query);

            if(mq.matches){
                currentDisplaySize=breakpoint.name;
                self.currentScrollMenuBreakpoint=breakpoint.scrolledMenuBreakpoint;
                self.currentScrolledMenu=self.isScrolledMenuEnabled();
            }
        }

        this.displayBreakpointsData.map(checkIfItsCurrent);

        //this.scrolledMenu=currentScrolledMenu;


        return {
            displaySize:currentDisplaySize,
            //scrolledMenu:currentScrolledMenu,
        }
    }


}




export default DisplayDetection;

