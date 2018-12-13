import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Rating from 'react-rating';
import Footer from './Footer';
import { Grid, Column } from './Grid';
import Container from './Container';
import Header from './Header';

const SinglePageStyle = styled.div`
  margin: 50px 0;
  section{
    padding-left: 40px;
  }
  h1, h3{
    margin: 0 0 15px 0;
  }
  ul{
    margin: 20px 0;
  }
  small{
    margin-left: 5px;
    font-size: 16px;
    color: #999;
    &::before{
      content: '(';
    }
    &::after{
      content: ')';
    }
  }
`;

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      ready: 'initial',
    }
  }
  componentDidMount() {
    const { match : { params } } = this.props;
    const id = params.id;
    this.setState({ ready: 'loading' });
    axios({
      method: 'get',
      url: `${process.env.HOST}/Cuisines/${id}`,
      headers: { Authorization: `Bearer ${process.env.API_KEY}` },
    }).then(({ data }) => {
      this.setState({
        recipe: data,
        ready: 'loaded',
      });
    });
  }
  render() {
    const { ready, recipe } = this.state;
    return (
      <Fragment>
        <Header />
        <SinglePageStyle>
          <Container>
            { ready === 'loading' ? (<h1>Loading content...</h1>) : '' }
            { ready === 'loaded' && (
              <Fragment>
                <Grid>
                  <Column columns="2">
                  </Column>
                  <Column columns="2">
                    <section>
                      <h1>{recipe.fields.Name}</h1>
                      <Rating initialRating={recipe.fields.Rating} />
                    </section>
                  </Column>
                </Grid>
                <Grid>
                  <Column columns="2">
                    <img src={recipe.fields.Icon[0].thumbnails.large.url} alt="recipe food" />
                  </Column>
                  <Column columns="2">
                    <section>
                      <h3>Ingredients</h3>
                      <ul>
                        { recipe.fields.Ingredients && recipe.fields.Ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        )) }
                      </ul>
                      <h3>Directions</h3>
                      <p>{recipe.fields.Direction}</p>
                    </section>
                  </Column>
                </Grid>
              </Fragment>
            ) }
          </Container>
        </SinglePageStyle>
        <Footer />
      </Fragment>
    );
  }
}

export default SinglePage;
