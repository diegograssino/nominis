import { Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react';

function DesktopView() {
  return (
    <Box
      minHeight="100vh"
      paddingTop="45px"
      paddingX="45px"
      paddingBottom="60px"
      bgImage="url('assets/desktop-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box>
        <Flex>
          <Box color="red.600">
            <Heading as="h2" size="lg">
              Story Title
            </Heading>
            <Text fontSize="2xl">Episode 1</Text>
          </Box>
          <Spacer />
          <Box>Hearts</Box>
          <Spacer />
          <Box>User</Box>
          <Spacer />
          <Spacer />
          <Box alignContent="end">Volume</Box>
        </Flex>
        <Flex>
          <Box>
            <Text marginTop="63px" fontSize="4xl" fontWeight="500">
              Let&apos;s practice
            </Text>
            <Text marginTop="15px" fontSize="3xl">
              Put the words in order to make a correct sentence
            </Text>
          </Box>
          <Spacer />
          <Box marginStart="20%" minWidth="35%">
            Game
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default DesktopView;
