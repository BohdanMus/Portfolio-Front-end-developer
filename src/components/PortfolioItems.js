import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button, Carousel, Modal } from 'react-bootstrap';
import { MainContainer } from './PortfolioItems.styled';

const PortfolioItems = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <MainContainer>
      <Carousel>
        {items.map(item => (
          <Carousel.Item key={nanoid()} style={{ height: '100vh' }}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.name}
              onClick={() => openModal(item)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem && selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                style={{ width: '100%' }}
              />
              <p>{selectedItem.description}</p>
              <a
                href={selectedItem.link1}
                target="_blank"
                rel="noopener noreferrer"
              >
                Посилання 1
              </a>
              <a
                href={selectedItem.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Посилання 2
              </a>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Закрити
          </Button>
        </Modal.Footer>
      </Modal>
    </MainContainer>
  );
};

export default PortfolioItems;
