import { useMediaQuery } from '@chakra-ui/react';

import MobileView from '../Views/MobileView';
import DesktopView from '../Views/DesktopView';

import data from '../database/data';
import userData from '../database/user';

function ViewContainer() {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  return (
    <div>
      {isDesktop ? (
        <DesktopView game={data} user={userData} />
      ) : (
        <MobileView game={data} user={userData} />
      )}
    </div>
  );
}

export default ViewContainer;
