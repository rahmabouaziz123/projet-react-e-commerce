import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';



// 1. The code defines a function that takes an object with the properties "expand" and "theme".

// 2. The function returns an <IconButton> element, with the "expand" property set to the value of the "expand" property from the object passed as an argument, and the "theme" property set to the value of the "theme" property from the object passed as an argument.

// 3. If the "expand" property is set to false (which it is by default), then the "transform" property is set to "rotate(0deg)", and the "marginLeft" property is set to "auto".

// 4. If the "expand" property is set to true, then the "transform" property is set to "rotate(180deg)", and the "marginLeft" property is set to "auto".

  


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />; })

  (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  



  
  export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
  
      setExpanded(!expanded);
    };
  
    const [like, setLike] = React.useState(false);
  
    const handleLike = () => {
    
      setLike(!like);
    }
  
   
  //reducer state
  const { product1 } = useSelector(state => state.productReducer);
  console.log(product1)
    

  const dispatch = useDispatch();
  const { _id } = useParams();

  React.useEffect(() => {
      
      dispatch(getOneProduct(_id));
  }, [_id])



    return (
      <div className='productCardMen'>
  
      <Card sx={{ width: "20rem" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:  red[200] }} aria-label="recipe">
              {product1.category[0].toUpperCase()}
            </Avatar>
          }
          title={product1.nameProd}
      
        />
        <CardMedia
          component="img"
          height="310 vh"
          width="100%"
          image={product1.image}
          alt="wait for data"
        />



        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {`${product1.price} $`}
          </Typography>
        </CardContent>


        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <FavoriteIcon className={ like?'like' :'dislike'}  />
          </IconButton>
          
        
           
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
  
            <Typography paragraph>
              {product1.description}
            </Typography>
          
          </CardContent>
        </Collapse>
      </Card>
  
      </div>
    );
  }