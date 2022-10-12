import React from 'react';
import { Loader } from '../Loader';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

type Props = {
  activeTodo?: Todo,
  setActiveTodo: (value: undefined) => void,
  userInfo?: User,
};

export const TodoModal: React.FC<Props> = ({
  activeTodo,
  setActiveTodo,
  userInfo,
}) => {
  const { id, title, completed } = { ...activeTodo };
  const { name, email } = { ...userInfo };

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {!userInfo ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #
              {id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => {
                setActiveTodo(undefined);
              }}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {title}
            </p>

            {completed ? (
              <p className="block" data-cy="modal-user">
                <strong className="has-text-success">Done</strong>

                {' by '}

                <a href={`mailto:${email}`}>
                  {name}
                </a>
              </p>
            ) : (
              <p className="block" data-cy="modal-user">
                <strong className="has-text-danger">Planned</strong>

                {' by '}

                <a href="mailto:Sincere@april.biz">
                  {name}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
