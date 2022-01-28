import { Box, Image } from '@chakra-ui/react';

function UserWidget({ user }) {
  return (
    <Box marginBottom="63px">
      <Image
        shadow="md"
        borderRadius="8"
        width="4rem"
        height="4rem"
        src={process.env.PUBLIC_URL + user.avatar}
      />
    </Box>
  );
}

export default UserWidget;
