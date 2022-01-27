import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import theme from './theme/theme';

import MobileView from './Views/MobileView';
import DesktopView from './Views/DesktopView';

function App() {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        {isDesktop ? <DesktopView /> : <MobileView />}
      </ChakraProvider>
    </div>
  );
}

export default App;
