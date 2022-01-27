import { Box, Flex, Spacer, Text, Heading } from '@chakra-ui/react';

function MobileView() {
  return (
    <Box
      minHeight="100vh"
      paddingTop="45px"
      paddingX="45px"
      paddingBottom="60px"
      bgImage="url('assets/mobile-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box minHeight="50vh">
        <Flex>
          <Box color="red.600">
            <Heading as="h2" size="lg">
              Nominis
            </Heading>
          </Box>
          <Spacer />
          <Box>Hearts</Box>
          <Spacer />
          <Box alignContent="end">Volume</Box>
        </Flex>
        <Box>
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
          <Box marginStart="20%" minWidth="35%">
            Game
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default MobileView;
