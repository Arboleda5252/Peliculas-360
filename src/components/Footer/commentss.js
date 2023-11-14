import React, { useState } from 'react';
import { useEffect } from 'react';

const Commentss = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments));
  };

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setNewComment(newComment);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments);
      setNewComment('');
    }
  };

  return (
    <div>
      <h3 className='text-info p-3 text-center' >Atención al Cliente</h3>
      <p className='m-3 my-1 text-light'>
        En nuestro compromiso constante por brindar la mejor experiencia a nuestros usuarios, valoramos profundamente tu opinión. Cualquier comentario, opinión, sugerencia o queja que tengas es de gran importancia para nosotros, ya que nos proporciona información valiosa que utilizamos para perfeccionar nuestra página web y ofrecer un servicio que se adapte a tus necesidades. Así que, por favor, no dudes en hacernos saber lo que piensas, estamos aquí para ayudarte y estamos agradecidos por cada comentario que compartes.
      </p>
      <p>
        <br></br>
      </p>
      <div className='d-flex justify-content-center align-items-center'
      >
        <textarea
          type="text"
          placeholder="Escribe tu comentario..."
          value={newComment}
          onChange={handleCommentChange}
          rows="3" cols="80"
          className='border border-info p-2 mb-2 bg-dark text-light'
        />
        <button onClick={handleAddComment}
          className='btn btn-info m-3 my-1'
        >Enviar</button>
      </div>
      <div className='row border border-info p-2 mb-2 bg-dark m-3 my-1'
      >
        <p className='text-light p-1 text-center fw-bold' >Comentarios anteriores</p>
        <div className='d-flex'
        >
          <p className='text-light p-1 fw-bold'>
            {comments.map((comment, index) => (
              <p key={index} className='p-3 px-5 m-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'>{comment}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commentss;
