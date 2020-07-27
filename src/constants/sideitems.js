import React from 'react';

import { ROUTES } from '../configs';
import {  
  GroupTwo,
  Joystick,
} from '@telkomdesign/icons';

const sideitems = [
  {
    title: 'Points',
    icon: <GroupTwo fontSize="small" />,
    items: [
      { title: 'History', path: ROUTES.HISTORY_POINT() },
      { title: 'Offering', path: ROUTES.OFFERING() },
      { title: 'Quest', path: ROUTES.QUESTS() },
    ]
  },
  {
    icon: <Joystick fontSize="small" />,
    path: ROUTES.GAME_LIST(),
    title: 'Games',
  }
];

export default sideitems;