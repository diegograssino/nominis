import { Box, Flex, Spacer } from '@chakra-ui/react';

function MobileView() {
  return (
    <Box
      minHeight="100vh"
      bgImage="url('assets/mobile-background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box>
        <Flex>
          <Box>Title</Box>
          <Spacer />
          <Box>Hearts</Box>
          <Box>User</Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default MobileView;
