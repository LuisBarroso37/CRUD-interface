import USERS from './USERS_DATA';

const PROJECTS = [
  {
    name: 'Project name',
    collaborators: 5,
    users: [...USERS],
  },
  {
    name: 'Project name',
    collaborators: 2,
    users: [
      {
        name: 'Ophélie Boniface',
        email: 'ophelie.boniface@3ds.com',
      },
      {
        name: 'Arthur Bertrand',
        email: 'arthur.bertrand@3ds.com',
      },
    ],
  },
  {
    name: 'Project name',
    collaborators: 3,
    users: [
      {
        name: 'Ophélie Boniface',
        email: 'ophelie.boniface@3ds.com',
      },
      {
        name: 'Arthur Bertrand',
        email: 'arthur.bertrand@3ds.com',
      },
      {
        name: 'Thomas Jérôme',
        email: 'tje2@3ds.com',
      },
    ],
  },
  {
    name: 'Project name',
    collaborators: 1,
    users: [
      {
        name: 'Ophélie Boniface',
        email: 'ophelie.boniface@3ds.com',
      },
    ],
  },
];

export default PROJECTS;
