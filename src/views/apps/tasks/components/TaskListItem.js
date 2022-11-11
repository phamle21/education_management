import React from 'react';
import { Badge, Col, Card, Button, Dropdown } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../tasksSlice';

const MoreDetailToggle = React.forwardRef(({ onClick, variant = 'outline-primary', btnClassName = '' }, ref) => (
  <Button
    ref={ref}
    variant={variant}
    className={btnClassName}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-vertical" />
  </Button>
));
const TaskListItem = ({ task, onEditClick }) => {
  const dispatch = useDispatch();
  const { id, status, title, tags, detail, deleted } = task;

  const toggleStatus = () => {
    if (status === 'Done') {
      dispatch(updateTask({ item: { id, status: 'Active', title, tags, detail, deleted } }));
    } else {
      dispatch(updateTask({ item: { id, status: 'Done', title, tags, detail, deleted } }));
    }
  };

  const onDelete = (event) => {
    event.preventDefault();
    dispatch(updateTask({ item: { id, status, title, tags, detail, deleted: true } }));
  };
  const onUndoDelete = (event) => {
    event.preventDefault();
    dispatch(updateTask({ item: { id, status, title, tags, detail, deleted: false } }));
  };
  const onDeletePermanently = (event) => {
    event.preventDefault();
    dispatch(deleteTask({ id }));
  };
  const onEdit = (event) => {
    event.preventDefault();
    onEditClick(task);
  };

  return (
    <Col className="task-item" key={`item.${id}`}>
      <Card className="h-100">
        <Card.Body className="position-relative">
          <Dropdown align="end" as="div" style={{ position: 'initial' }}>
            <Dropdown.Toggle
              as={MoreDetailToggle}
              variant="foreground"
              btnClassName="hover-outline btn-icon btn-icon-only btn-sm position-absolute e-0 t-0 me-card mt-card z-index-1"
            />
            <Dropdown.Menu className="task-buttons">
              {deleted ? (
                <>
                  <a className="dropdown-item undo-delete-task" href="#undo-delete" onClick={onUndoDelete}>
                    Undo Delete
                  </a>
                  <a className="dropdown-item delete-permanently-task" href="#delete-permanently" onClick={onDeletePermanently}>
                    Delete Permanently
                  </a>
                </>
              ) : (
                <>
                  <a className="dropdown-item edit-task" href="#edit" onClick={onEdit}>
                    Edit
                  </a>
                  <a className="dropdown-item delete-task" href="#delete" onClick={onDelete}>
                    Delete
                  </a>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <div className="h-100">
            <label className="form-check custom-icon mb-0 checked-line-through checked-opacity-75 h-100">
              <input type="checkbox" className="form-check-input check-input" checked={status === 'Done'} onChange={toggleStatus} />
              <span className="form-check-label h-100 text-decoration-none">
                <span className="content h-100 text-decoration-none d-flex flex-column justify-content-between">
                  <span className="mb-3 h5 pe-7 lh-1-5 ">{title}</span>
                  <span className="text-alternate mb-4 flex-grow-1 detail">{detail}</span>
                  <div className="tags">
                    {tags &&
                      tags.map((t, tIndex) => (
                        <Badge key={`tag.t${id}.t${tIndex}`} bg={t.bg} className="opacity-75 text-decoration-none me-1">
                          {t.title}
                        </Badge>
                      ))}
                  </div>
                </span>
              </span>
            </label>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default React.memo(TaskListItem);
