import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [form, setForm] = useState({
    author: 'franciscogustavo',
    repositoryName: 'fullstack-interview-test',
  });
  const history = useHistory();

  const onChange = (_event) => {
    const { name, value } = _event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (_event) => {
    _event.preventDefault();
    history.push(`/${form.author}/${form.repositoryName}`);
  };

  return (
    <div className="page home">
      <form className="home__form" onSubmit={onSubmit}>
        <div>
          <label className="home__label" htmlFor="author">
            Author
          </label>
          <input
            className="home__input"
            type="text"
            id="author"
            name="author"
            value={form.author}
            onChange={onChange}
          />
        </div>
        <div>
          <label className="home__label" htmlFor="repositoryName">
            Repository
          </label>
          <input
            className="home__input"
            type="text"
            id="repositoryName"
            name="repositoryName"
            value={form.repositoryName}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="home__btnSubmit">
          Watch demo
        </button>
      </form>
    </div>
  );
};

export default Home;
