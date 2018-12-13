import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


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
