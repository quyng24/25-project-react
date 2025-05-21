import './App.css'
import { useState } from 'react'
import Modal from './component/Model/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    content: null
  });
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  }
  return (
    <>
      <div className='app'>

        <h1>React Modal Demo</h1>

        <div className='button-container'>
          <button
          className='modal-button'
          onClick={() => openModal('Welcome', (
            <div>
              <h3>Welcome to our Modal Demo!</h3>
              <p>This is a simple example of a modal interface built with React.</p>
              <p>Try clicking other buttons or press ESC to close!</p>
            </div>
          ))}
          >
            Open Welcome Modal
          </button>

          <button
          className='modal-button'
          onClick={() => openModal('About', (
            <div>
              <h3>About Our Team</h3>
              <p>We are passionate about creating great React components.</p>
              <p>This modal component is just one example of what we can build!</p>
            </div>
          ))}
          >
            Open About Modal
          </button>

          <button
          className='modal-button'
          onClick={() => openModal('Contact', (
            <div>
              <h3>Get in Touch</h3>
              <p>Email: example@example.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 React Street, JavaScript City</p>
            </div>
          ))}
          >
            Open Contact Modal
          </button>
        </div>
        <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        >
          {modalContent.content}
        </Modal>
      </div>
    </>
  )
}

export default App
