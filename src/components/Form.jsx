import React from 'react';
import styled from 'styled-components';


const Formstyle = styled.form`
  margin-top:1.8em;

  input{
    height: 40px;
    border: 0;
    border-radius: var(--border-radius);
    font: inherit;
    margin-right: 20px;
    padding: 10px;
    width: 200px;
  }

  button{
    height: 40px;
    background: var(--color-brand-1);
    border:none;
    border-radius: var(--border-radius);
    color: white;
    margin-left: 10px;
    font: inherit;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }


`;


const Form = () => (
  <Formstyle>
    <input type="text" name="recipe name" placeholder="Recipe name" />
    <input type="text" name="ratings" placeholder="Ratings" />
    <button type="submit">Create Recipe</button>
  </Formstyle>
)

export default Form;
