import { CardActions, CardContent, Button, Typography, IconButton } from '@mui/material'

import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Details, StyledCard, StyledCardMedia, StyledOverlay, StyledOverlay2, StyledTypography } from './index.styled';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledCardMedia image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <StyledOverlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </StyledOverlay>
      <StyledOverlay2>
        <IconButton sx={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></IconButton>
      </StyledOverlay2>
      <Details>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </Details>
      <StyledTypography gutterBottom variant="h5" component="h2">
        {post.title}
      </StyledTypography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </StyledCard>
  );
};

export default Post;
