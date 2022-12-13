import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/actions/actionProduct";

import "./DetailProduct.css";
import { ListVertical } from "./ListVertical";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /////////////////////////////////////////////////////////////////

  //reducer state
  const { product1 } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(_id));
  }, [_id]);

  const [like, setLike] = React.useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    
    <div>
      <ListVertical/>
      <Card className={classes.root}  id="cardcenter">
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            className={classes.avatar}
          >
            {product1&&product1.category[0]}
            {/* {product1&&product1.category} */}
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <Link to={"/listAdmin"}>
            <MoreVertIcon />  
             </Link>
            
          
          </IconButton>
        }


       

        className="textnameProd"
        title={product1&&product1.nameProd}
        // subheader="September 14, 2016"
      />

      <div> <span>
              {product1.rating == "1" ? "⭐" : null}
              {product1.rating == "2" ? "⭐⭐" : null}
              {product1.rating == "3" ? "⭐⭐⭐" : null}
              {product1.rating == "4" ? "⭐⭐⭐⭐" : null}
              {product1.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
            </span></div>
      <div className="geeks">
        <CardMedia
          // id="imgzoom"
          // className={classes.media}
          // image={product1.image}
          // title="Paella dish"
          id="imgzoom"
          component="img"
          height="300 vh"
          width="100%"
          image={product1&&product1.image}
          alt="wait for data"
        />
      </div>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className="price"
        >
          <span className="span1"> <strike> {product1&&product1.price}</strike></span>{" "}
          <span className="span1"> DT</span>
           <p>
           (Up to {product1.sold} % Of)
           </p>
           <p>
           {product1.price - (product1.price * product1.sold) / 100}
           <span> DT</span>
           </p>

        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            className={like ? "like" : "dislike"}
            onClick={handleLike}
          />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>


        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className="description">
            Dexcription:
          </Typography>

          <Typography paragraph className="textdescription">
            {product1&&product1.description}
          </Typography>

          <Typography paragraph className="description">
            Quanntite:
          </Typography>
          <Typography paragraph className="description">
           {product1.quantity}
          </Typography>
       
        </CardContent>
      </Collapse>
    </Card>
    
    </div>
  );
}
