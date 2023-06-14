import React from 'react'
import Screen from './Screen';

const ScreenList = ({ projects }) => {
  return (
    <div>
        {projects.map((user, i) => {
            return (
              <Screen
                key={user.id}
                name={projects[i].name}
                link={projects[i].link}
              />
            );
        })}
    </div>
  )
}

export default ScreenList