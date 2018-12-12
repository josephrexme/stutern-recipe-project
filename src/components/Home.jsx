import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Column } from './Grid';
import FoodBg from '../../assets/food-bg.jpg';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Container from './Container';
import Form from './Form';
const HomeStyle = styled.div`
  header, footer{
    text-align: center;
  }
  main{
    margin: 20px 0;
  }
`;

const Header = styled.header`
  height: 250px;
  padding: 60px;
  background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${FoodBg});
  background-size: cover;
  background-position: center;
  color: #fff;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      ready: 'initial',
    };
  }
  componentDidMount() {
    this.setState({
      ready: 'loading',
    });
    axios({
      method: 'get',
      url: `${process.env.HOST}/Cuisines`,
      headers: {Authorization: `Bearer ${process.env.API_KEY}`},
    }).then(({ data: { records } }) => {
      this.setState({
        ready: 'loaded',
        recipes: records,
      })
    })
  }
  render() {
    const { recipes, ready } = this.state;
    return (
      <HomeStyle>
        <Header>
          <h1>Recipouille</h1>
          <p>Your Trusted Source For Great Food Recipes</p>
          <Form />
        </Header>
        <main>
          <Container>
            <Grid>
              { recipes.length ? '' : 'There are no recipe items'  }
              { ready === 'loading' ? 'Loading...' : '' }
              { recipes.map(recipe => (
                <Column key={recipe.id}>
                  <FoodItem image={recipe.fields.Icon[0].url} rating="4.5">
                    <h3><Link to={`/recipe/${recipe.id}`}>{recipe.fields.Name}</Link></h3>
                  </FoodItem>
                </Column>
              )) }
            </Grid>
          </Container>
        </main>
        <Footer />
      </HomeStyle>
    );
  }
} 

export default Home;
