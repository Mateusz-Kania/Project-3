import React from 'react';
import AppProvider from './Store/AppProvider';
import Frame from './Frame/StandardFrame';
import ChartsPage from './Page/ChartsPage/ChartsPage';



function App() {

    return (
        <AppProvider>
          <Frame>
            <ChartsPage />
          </Frame>
        </AppProvider>
    );
}

export default App;
