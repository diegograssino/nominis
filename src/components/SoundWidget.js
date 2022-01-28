import { Box, Image } from '@chakra-ui/react';

function SoundWidget() {
  const soundOn = `${process.env.PUBLIC_URL}/assets/sound.png`;

  return (
    <Box marginBottom="63px">
      <Image
        width="1.5rem"
        height="1.5rem"
        src={process.env.PUBLIC_URL + soundOn}
      />
    </Box>
  );
}

export default SoundWidget;
