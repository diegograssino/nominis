import { Box, Flex, Image, Text } from '@chakra-ui/react';

function Game({ game }) {
  function handleClick(w) {
    console.log(`${w} was clicked`);
  }

  return (
    <Box marginTop="3rem">
      <Flex marginBottom="1rem" justifyContent="end">
        <Image
          width="1.5rem"
          height="1.5rem"
          src={`${process.env.PUBLIC_URL}/assets/reload.png`}
        />
      </Flex>
      <Box
        shadow="md"
        borderRadius="15"
        width="100%"
        height="4.5rem"
        background="white"
        paddingX="1.25rem"
        paddingY=".75rem"
      >
        <Text fontSize="3xl" fontWeight="500" color="gray.600">
          Hola
        </Text>
      </Box>
      <Flex marginTop="2.5rem" wrap="wrap">
        {game.words.map((word) => (
          <Box
            key={word.id}
            shadow="md"
            borderRadius="10"
            height="3rem"
            background="white"
            paddingX=".75rem"
            paddingY=".15rem"
            marginRight="1rem"
            marginBottom="1rem"
            as="button"
            onClick={() => handleClick(word)}
          >
            <Text fontSize="3xl" fontWeight="500" color="gray.600">
              {word}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Game;
