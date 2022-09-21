import { React, useCallback } from 'react';
import './PersonalList.css';

import { v4 as uuidv4 } from 'uuid';
import data from '../../data/team-data.json';

import PersonalListCard from '../PersonalListCard/PersonalListCard';

const PersonalList = () => {
  const onClickCard = useCallback(
    (item) => {
      console.dir(`${item._id}`);
    }, []
  );

  return (
    <div className='list'>
      <div className='personal-list' >
        {
          data.team_members.map((item, index) => {
            return (
              <div key={uuidv4()} >
                <PersonalListCard item={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default PersonalList;
