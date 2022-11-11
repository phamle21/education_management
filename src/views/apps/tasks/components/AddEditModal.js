import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { createTask, updateTask } from '../tasksSlice';

const tagOptions = [
  { value: 'Project', title: 'Project', bg: 'outline-primary', textColor: 'primary' },
  { value: 'Personal', title: 'Personal', bg: 'outline-warning', textColor: 'warning' },
  { value: 'Urgent', title: 'Urgent', bg: 'outline-danger', textColor: 'danger' },
  { value: 'List', title: 'List', bg: 'outline-success', textColor: 'success' },
];

const statusOptions = [
  { value: 'Active', label: 'Active' },
  { value: 'Done', label: 'Done' },
];
const AddEditModal = ({ show, onHide }) => {
  const { selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState(selectedTask);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);

  useEffect(() => {
    if (selectedTask && selectedTask.tags) {
      const currentTaskTags = [];
      selectedTask.tags.map((t) => {
        currentTaskTags.push(tagOptions.find((x) => x.value === t.title));
        return true;
      });
      setSelectedTags(currentTaskTags);
    }
    return () => {};
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedTask && selectedTask.status) {
      setSelectedStatus(statusOptions.find((x) => x.value === selectedTask.status));
    }
    return () => {};
    // eslint-disable-next-line
  }, []);

  const formatOptionLabel = ({ title, bg, textColor }) => (
    <div>
      <span className={`align-middle d-inline-block option-circle me-2 rounded-xl bg-${bg}`} />{' '}
      <span className={`align-middle d-inline-block lh-1 text-${textColor}`}>{title}</span>
    </div>
  );

  const onChangeTitle = (event) => {
    setCurrentTask({ ...currentTask, title: event.currentTarget.value });
  };
  const onChangeDetail = (event) => {
    setCurrentTask({ ...currentTask, detail: event.currentTarget.value });
  };

  const onChangeTags = (tags) => {
    setSelectedTags(tags);
  };

  const onChangeStatus = (status) => {
    setSelectedStatus(status);
  };

  const onSaveClick = () => {
    onHide();
    const item = {
      ...currentTask,
      tags: selectedTags.map((x) => ({ title: x.title, bg: x.bg })),
      status: selectedStatus.value,
      deleted: false,
    };
    if (selectedTask && selectedTask.id) {
      dispatch(updateTask({ item }));
    } else {
      dispatch(createTask({ item }));
    }
  };

  return (
    <Modal className="modal-right" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedTask ? 'Edit' : 'New Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div className="mb-3 filled">
          <CsLineIcons icon="edit-square" />
          <Form.Control type="text" value={currentTask ? currentTask.title : ''} onChange={onChangeTitle} placeholder="Title" />
        </div>

        <div className="mb-3 filled">
          <Form.Control as="textarea" rows="4" value={currentTask ? currentTask.detail : ''} onChange={onChangeDetail} placeholder="Detail" />
          <CsLineIcons icon="notebook-1" />
        </div>

        <div className="mb-3 filled w-100">
          <CsLineIcons icon="bookmark" />
          <Select
            classNamePrefix="react-select"
            isClearable={false}
            isMulti
            options={tagOptions}
            value={selectedTags}
            formatOptionLabel={formatOptionLabel}
            onChange={onChangeTags}
            placeholder="Tags"
          />
        </div>
        <div className="mb-3 filled mb-0 w-100">
          <CsLineIcons icon="activity" />
          <Select classNamePrefix="react-select" options={statusOptions} value={selectedStatus} onChange={onChangeStatus} placeholder="Status" />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        {selectedTask === null ? (
          <Button variant="primary" className="btn-icon btn-icon-end" onClick={onSaveClick}>
            <span>Add</span>
            <CsLineIcons icon="plus" />
          </Button>
        ) : (
          <Button variant="primary" className="btn-icon btn-icon-end" onClick={onSaveClick}>
            <span>Save</span> <CsLineIcons icon="check" />
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(AddEditModal);
