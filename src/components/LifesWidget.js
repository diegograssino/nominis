import { Flex, Image } from '@chakra-ui/react';

function LifesWidget({ align }) {
  const fullHeart = `${process.env.PUBLIC_URL}/assets/full-heart.png`;
  const emptyHeart = `${process.env.PUBLIC_URL}/assets/empty-heart.png`;

  const responsiveHearts = ['1rem', '1.5rem', '.8rem', '1.25rem', '1.5rem'];

  return (
    <Flex height="4rem" alignItems={align} paddingTop=".25rem">
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
    </Flex>
  );
}
export default LifesWidget;
