import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ModalAddEdit = ({ tableInstance }) => {
  const { selectedFlatRows, data, setData, setIsOpenAddEditModal, isOpenAddEditModal } = tableInstance;
  const emptyItem = { id: data.length + 1, name: '', sales: '', stock: '', category: '', tag: '' };
  const [selectedItem, setSelectedItem] = useState(emptyItem);

  useEffect(() => {
    if (isOpenAddEditModal && selectedFlatRows.length === 1) {
      setSelectedItem(selectedFlatRows[0].original);
    } else {
      setSelectedItem(emptyItem);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenAddEditModal, selectedFlatRows]);

  const changeName = (event) => {
    setSelectedItem({ ...selectedItem, name: event.target.value });
  };
  const changeSales = (event) => {
    setSelectedItem({ ...selectedItem, sales: event.target.value });
  };
  const changeStock = (event) => {
    setSelectedItem({ ...selectedItem, stock: event.target.value });
  };
  const changeCategory = (event) => {
    if (event.target.checked) {
      setSelectedItem({ ...selectedItem, category: event.target.value });
    }
  };
  const changeTag = (event) => {
    if (event.target.checked) {
      setSelectedItem({ ...selectedItem, tag: event.target.value });
    }
  };

  const saveItem = () => {
    if (selectedFlatRows.length === 1) {
      const { index } = selectedFlatRows[0];
      const newData = data.map((row, rowIndex) => (rowIndex === index ? selectedItem : row));
      setData(newData);
    } else {
      const newData = [selectedItem, ...data];
      setData(newData);
    }
    setIsOpenAddEditModal(false);
  };

  return (
    <Modal className=" modal-right fade" show={isOpenAddEditModal} onHide={() => setIsOpenAddEditModal(false)}>
      <Modal.Header>
        <Modal.Title>{selectedFlatRows.length === 1 ? 'Edit' : 'Add'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={selectedItem ? selectedItem.name : ''} onChange={changeName} />
          </div>
          <div className="mb-3">
            <Form.Label>Sales</Form.Label>
            <Form.Control type="number" defaultValue={selectedItem ? selectedItem.sales : ''} onChange={changeSales} />
          </div>
          <div className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" defaultValue={selectedItem ? selectedItem.stock : ''} onChange={changeStock} />
          </div>

          <div className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Check
              type="radio"
              label="Whole Wheat"
              value="Whole Wheat"
              id="categoryRadio1"
              name="categoryRadio"
              checked={selectedItem && selectedItem.category === 'Whole Wheat'}
              onChange={changeCategory}
            />
            <Form.Check
              type="radio"
              label="Sourdough"
              value="Sourdough"
              id="categoryRadio2"
              name="categoryRadio"
              checked={selectedItem && selectedItem.category === 'Sourdough'}
              onChange={changeCategory}
            />
            <Form.Check
              type="radio"
              label="Multigrain"
              value="Multigrain"
              id="categoryRadio3"
              name="categoryRadio"
              checked={selectedItem && selectedItem.category === 'Multigrain'}
              onChange={changeCategory}
            />
          </div>

          <div className="mb-3">
            <Form.Label>Tag</Form.Label>
            <Form.Check
              type="radio"
              label="New"
              value="New"
              id="tagRadio1"
              name="tagRadio"
              checked={selectedItem && selectedItem.tag === 'New'}
              onChange={changeTag}
            />
            <Form.Check
              type="radio"
              label="Sale"
              value="Sale"
              id="tagRadio2"
              name="tagRadio"
              checked={selectedItem && selectedItem.tag === 'Sale'}
              onChange={changeTag}
            />
            <Form.Check
              type="radio"
              label="Done"
              value="Done"
              id="tagRadio3"
              name="tagRadio"
              checked={selectedItem && selectedItem.tag === 'Done'}
              onChange={changeTag}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={() => setIsOpenAddEditModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveItem}>
          {selectedFlatRows.length === 1 ? 'Done' : 'Add'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddEdit;
