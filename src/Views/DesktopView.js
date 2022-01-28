import { Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react';
import Game from '../components/Game';
import LifesWidget from '../components/LifesWidget';
import SoundWidget from '../components/SoundWidget';
import UserWidget from '../components/UserWidget';

function DesktopView({ game, user }) {
  return (
    <Box
      minHeight="100vh"
      paddingTop="1.5rem"
      paddingX="2.5rem"
      paddingBottom="4rem"
      bgImage="url('assets/desktop-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box>
        <Flex>
          <Box color="red.600">
            <Heading as="h2" size="lg">
              Story Title
            </Heading>
            <Text fontSize="2xl" lineHeight="3.5rem">
              Episode 1
            </Text>
          </Box>
          <Spacer />
          <Box marginRight="1.5rem">
            <LifesWidget view="desktop" />
          </Box>
          <Box marginRight="20rem">
            <UserWidget user={user} />
          </Box>
          <Spacer />
          <Box alignContent="end">
            <SoundWidget />
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Text
              marginTop="2.5rem"
              fontSize="4xl"
              fontWeight="500"
              color="gray.600"
            >
              Let&apos;s practice
            </Text>
            <Text
              marginTop="1.25rem"
              fontSize="3xl"
              color="gray.600"
              lineHeight="3rem"
            >
              Put the words in order to make a correct sentence
            </Text>
          </Box>
          <Spacer />
          <Box marginStart="20%" minWidth="35%">
            <Game game={game} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default DesktopView;
