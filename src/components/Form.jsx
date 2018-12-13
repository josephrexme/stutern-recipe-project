import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Formstyle = styled.form`
  margin-top:1.8em;

  input{
    height: 40px;
    margin: 5px 0;
    border: 0;
    border-radius: var(--border-radius);
    font: inherit;
    padding: 10px;
    width: 100%;
  }

  button{
    display: inline-block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    background: var(--color-brand-1);
    border:none;
    border-radius: var(--border-radius);
    color: white;
    font: inherit;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
  }
  @media(min-width: 720px) {
    input{
      width: 200px;
      margin: 0 5px;
    }
    button{
      width: auto;
      margin: 0 5px;
    }
  }
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      ratings: 0,
    };
    this.createRecipe = this.createRecipe.bind(this);
    this.inputName = this.inputName.bind(this);
    this.inputRating = this.inputRating.bind(this);
  }
  createRecipe(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${process.env.HOST}/Cuisines`,
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
      data: {
        fields: {
          Name: this.state.recipeName,
          Rating: Number(this.state.ratings),
        }
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
  inputName(event) {
    this.setState({
      recipeName: event.target.value,
    })
  }
  inputRating(event) {
    this.setState({
      ratings: event.target.value,
    })
  }
  render() {
    return (
      <Formstyle onSubmit={this.createRecipe}>
        <input onChange={this.inputName} type="text" name="recipeName" placeholder="Recipe name" />
        <input onChange={this.inputRating} type="text" name="ratings" placeholder="Ratings" />
        <button type="submit">Create Recipe</button>
      </Formstyle>
    );
  }
} 

export default Form;
