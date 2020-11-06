import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './Users-modal.css';

import USERS from '../projects-menu/USERS_DATA';
import {
  IRootReducerActions,
  IRootReducerState,
} from '../../redux/root-reducer';
import {
  IUser,
  IProjects,
  setProjects,
} from '../../redux/projects/projects.actions';
import { setSearchField, toggleButton } from '../../redux/users/users.actions';

type IUsersModalProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const UsersModal: React.FC<IUsersModalProps> = ({
  num,
  projects,
  setProjects,
  buttonLabel,
  searchField,
  setSearchField,
  buttonClicked,
  toggleButton,
}) => {
  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value } = event.target;
    setSearchField(value);
  };

  const removeUser = (index: number) => {
    let projectsCopy = [...projects];
    projectsCopy[num].users.splice(index, 1); // Remove user
    projectsCopy[num].collaborators--; // Subtract 1 user from collaborators of project
    setProjects(projectsCopy);
  };

  const addUser = (name: string, email: string) => {
    let projectsCopy = [...projects];

    if (!projectsCopy[num].users.find((user) => user.name === name)) {
      projectsCopy[num].users.push({ name, email }); // Add user
      projectsCopy[num].collaborators++; // Add 1 user to collaborators of project
      setProjects(projectsCopy);
    } else {
      return;
    }
  };

  let users = projects[num].users;

  return (
    <div>
      <div className='users-content'>
        {users.map((user: IUser, i) => (
          <div key={i} className='user-container'>
            <div className='user'>
              <i className='fas fa-user-circle fa-2x user-icon'></i>
              <div className='user-info'>
                <p className='username'>{user['name']}</p>
                <p className='user-email'>{user['email']}</p>
              </div>
            </div>
            <p className='remove-user' onClick={() => removeUser(i)}>
              Delete
            </p>
          </div>
        ))}
      </div>

      {!buttonClicked ? (
        <button className='add-users-button' onClick={() => toggleButton()}>
          {buttonLabel}
        </button>
      ) : (
        <div className='searchbar'>
          <input
            className='input'
            type='text'
            name='search'
            placeholder='ex: firstname.lastname@provider.com'
            onChange={onSearch}
          />
          <div className={searchField ? 'searched-users' : ''}>
            {searchField
              ? USERS.filter((user) =>
                  user['name'].toLowerCase().includes(searchField)
                ).map((user, i) => (
                  <div
                    key={i}
                    className='user-container invite-user'
                    onClick={() => addUser(user.name, user.email)}
                  >
                    <div className='user'>
                      <i className='fas fa-user-circle fa-2x user-icon'></i>
                      <div className='user-info'>
                        <p className='username'>{user.name}</p>
                        <p className='user-email'>{user.email}</p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<IRootReducerActions>) => ({
  setProjects: (projects: IProjects) => dispatch(setProjects(projects)),
  toggleButton: () => dispatch(toggleButton()),
  setSearchField: (input: string) => dispatch(setSearchField(input)),
});

const mapStateToProps = (state: IRootReducerState) => ({
  num: state.projects.numProject,
  projects: state.projects.projectsDB,
  buttonLabel: state.projects.buttonLabel,
  buttonClicked: state.users.buttonClicked,
  searchField: state.users.searchField,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersModal);
