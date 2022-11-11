import React, { useState } from 'react';
import { Button, Form, Modal, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { createEvent, deleteEvent, updateEvent } from '../calendarSlice';
import 'react-datepicker/dist/react-datepicker.css';

const ModalAddEdit = ({ show = false, onHide = () => {} }) => {
  const dispatch = useDispatch();
  const [isShowDeleteConfirmModal, setIsShowDeleteConfirmModal] = useState(false);
  const convertStringToDate = (dateStr, key) => {
    const date = dateStr && typeof dateStr === 'string' ? new Date(dateStr) : new Date();
    return { [`${key}Date`]: date, [`${key}Time`]: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}` };
  };

  const convertDateToString = (date, time) => {
    return `${(typeof date === 'string' ? new Date(date) : date).toISOString().replace(/T.*$/, '')}T${time}:00`;
  };
  const { selectedEvent } = useSelector((state) => state.calendar);
  const [selectedItem, setSelectedItem] = useState({
    ...selectedEvent,
    ...convertStringToDate(selectedEvent.start, 'start'),
    ...convertStringToDate(selectedEvent.end, 'end'),
  });

  const timeOptions = React.useMemo(() => {
    const options = [];
    [...Array(24).keys()].map((h) => {
      [0, 15, 30, 45].map((m) => {
        const time = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        options.push({ value: time, label: time });
        return m;
      });
      return h;
    });
    return options;
  }, []);

  const categories = [
    { value: 'Work', label: 'Work', color: 'border-primary' },
    { value: 'Personal', label: 'Personal', color: 'border-tertiary' },
    { value: 'Education', label: 'Education', color: 'border-secondary' },
  ];

  const formatOptionLabel = ({ label, color }) => (
    <div>
      <span className={`align-middle d-inline-block option-circle me-2 rounded-xl border ${color}`} />
      <span className="align-middle d-inline-block lh-1">{label}</span>
    </div>
  );
  const changeTitle = (event) => {
    setSelectedItem({ ...selectedItem, title: event.target.value });
  };
  const changeCategory = (categoryItem) => {
    setSelectedItem({ ...selectedItem, category: categoryItem.value });
  };
  const changeStartDate = (date) => {
    if (date) setSelectedItem({ ...selectedItem, startDate: date, start: convertDateToString(date, selectedItem.startTime) });
  };
  const changeStartTime = (time) => {
    if (time) setSelectedItem({ ...selectedItem, startTime: time.value, start: convertDateToString(selectedItem.start, time.value) });
  };

  const changeEndDate = (date) => {
    if (date) setSelectedItem({ ...selectedItem, endDate: date, end: convertDateToString(date, selectedItem.endTime) });
  };
  const changeEndTime = (time) => {
    if (time) setSelectedItem({ ...selectedItem, endTime: time.value, end: convertDateToString(selectedItem.end, time.value) });
  };

  const saveItem = () => {
    const item = { ...selectedItem };
    delete item.startDate;
    delete item.startTime;
    delete item.endDate;
    delete item.endTime;

    if (selectedItem.id !== 0) {
      dispatch(updateEvent(item));
    } else {
      dispatch(createEvent(item));
    }
    onHide();
  };
  const deleteItem = () => {
    setIsShowDeleteConfirmModal(true);
  };
  const deleteItemApprove = () => {
    if (selectedItem.id !== 0) {
      dispatch(deleteEvent(selectedItem.id));
    }
    setIsShowDeleteConfirmModal(false);
    onHide();
  };

  return (
    <>
      <Modal className="modal-right fade" show={show} onHide={onHide}>
        <Modal.Header>
          <Modal.Title>{selectedEvent.id !== 0 ? 'Edit Event' : 'Add Event'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <Form>
            <div className="mb-3 top-label">
              <Form.Control type="text" defaultValue={selectedItem ? selectedItem.title : ''} onChange={changeTitle} />
              <Form.Label>TITLE</Form.Label>
            </div>
            <div className="mb-3 top-label">
              <Select
                classNamePrefix="react-select"
                options={categories}
                formatOptionLabel={formatOptionLabel}
                value={selectedItem ? categories.find((x) => x.value === selectedItem.category) : ''}
                onChange={changeCategory}
                placeholder=""
              />
              <span>CATEGORY</span>
            </div>
            <Row className="g-0">
              <Col className="pe-2">
                <div className="mb-3 top-label">
                  <DatePicker className="form-control" selected={selectedItem.startDate} onChange={(date) => changeStartDate(date)} showFullMonthYearPicker />
                  <span>START DATE</span>
                </div>
              </Col>
              <div className="col-auto">
                <div className="mb-3 top-label sw-12">
                  <Select
                    classNamePrefix="react-select"
                    options={timeOptions}
                    value={{ value: selectedItem.startTime, label: selectedItem.startTime }}
                    onChange={changeStartTime}
                    placeholder=""
                  />
                  <span>TIME</span>
                </div>
              </div>
            </Row>
            <Row className="g-0">
              <Col className="pe-2">
                <div className="mb-3 top-label">
                  <DatePicker className="form-control" selected={selectedItem.endDate} onChange={(date) => changeEndDate(date)} />
                  <span>END DATE</span>
                </div>
              </Col>
              <Col xs="auto">
                <div className="mb-3 top-label sw-12">
                  <Select
                    classNamePrefix="react-select"
                    options={timeOptions}
                    value={{ value: selectedItem.endTime, label: selectedItem.endTime }}
                    onChange={changeEndTime}
                    placeholder=""
                  />
                  <span>TIME</span>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {selectedEvent.id !== 0 ? (
            <>
              <OverlayTrigger delay={{ show: 500, hide: 0 }} overlay={<Tooltip>Delete</Tooltip>} placement="top">
                <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={deleteItem}>
                  <CsLineIcons icon="bin" />
                </Button>
              </OverlayTrigger>

              <Button className="btn-icon btn-icon-end" onClick={saveItem}>
                <span>Save</span> <CsLineIcons icon="check" />
              </Button>
            </>
          ) : (
            <Button className="btn-icon btn-icon-start" onClick={saveItem}>
              <CsLineIcons icon="plus" /> <span>Add</span>
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Modal className="fade modal-close-out" show={isShowDeleteConfirmModal}>
        <Modal.Header>
          <Modal.Title> Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <p>
            <span className="fw-bold">{selectedItem.title}</span> <span>will be deleted. Are you sure?</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsShowDeleteConfirmModal(false)}>No</Button>
          <Button variant="outline-primary" onClick={deleteItemApprove}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddEdit;
