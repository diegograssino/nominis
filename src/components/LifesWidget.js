import { Center, Flex, Image } from '@chakra-ui/react';

function LifesWidget() {
  const fullHeart = `${process.env.PUBLIC_URL}/assets/full-heart.png`;
  const emptyHeart = `${process.env.PUBLIC_URL}/assets/empty-heart.png`;

  const responsiveHearts = ['1.5rem', '1.5rem', '.8rem', '1.25rem', '1.5rem'];

  return (
    <Flex height="4rem">
      <Center>
        <Image
          marginX=".25rem"
          width={responsiveHearts}
          height={responsiveHearts}
          src={emptyHeart}
        />
        <Image
          marginX=".25rem"
          width={responsiveHearts}
          height={responsiveHearts}
          src={fullHeart}
        />
        <Image
          marginX=".25rem"
          width={responsiveHearts}
          height={responsiveHearts}
          src={fullHeart}
        />
        <Image
          marginX=".25rem"
          width={responsiveHearts}
          height={responsiveHearts}
          src={fullHeart}
        />
        <Image
          marginX=".25rem"
          width={responsiveHearts}
          height={responsiveHearts}
          src={fullHeart}
        />
      </Center>
    </Flex>
  );
}

export default LifesWidget;
