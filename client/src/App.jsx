import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts';
import Form from './components/Form';
import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import { Container, Grid, Grow } from '@mui/material';
import { StyledAppBar, StyledHeading, StyledImage } from './styles/index.styled';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">Memories</StyledHeading>
        <StyledImage src={memories} alt="icon" height="60" />
      </StyledAppBar>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
