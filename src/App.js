import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import theme from './theme/theme';

import ViewContainer from './components/ViewContainer';

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ViewContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
