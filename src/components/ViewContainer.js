import { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

import MobileView from '../Views/MobileView';
import DesktopView from '../Views/DesktopView';

import data from '../database/data';
import userData from '../database/user';

function ViewContainer() {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  const [game, setGame] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setGame(data);
    setUser(userData);
  }, []);

  return (
    <div>
      {isDesktop ? (
        <DesktopView game={game} user={user} />
      ) : (
        <MobileView game={game} user={user} />
      )}
    </div>
  );
}

export default ViewContainer;
