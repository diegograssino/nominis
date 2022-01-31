import { Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react';
import Game from '../components/Game';
import LifesWidget from '../components/LifesWidget';
import SoundWidget from '../components/SoundWidget';

function MobileView({ game }) {
  return (
    <Box
      minHeight="100vh"
      paddingTop="45px"
      paddingX="45px"
      paddingBottom="60px"
      bgImage="url('assets/mobile-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box minHeight="50vh">
        <Flex>
          <Box color="red.600">
            <Heading as="h2" size="md">
              Nominis
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <LifesWidget align="start" />
          </Box>
          <Spacer />
          <Box alignContent="end">
            <SoundWidget />
          </Box>
        </Flex>
        <Box minHeight="50vh">
          <Text marginTop="30px" fontSize="4xl" fontWeight="500">
            Let&apos;s practice
          </Text>
          <Text marginTop="15px" fontSize="xl">
            Put the words in order to make a correct sentence
          </Text>
        </Box>
      </Box>
      <Box>
        <Flex>
          <Spacer />
          <Box>
            <Game game={game} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default MobileView;
