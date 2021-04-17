import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
const useStyles = makeStyles({
  root: {
        maxWidth: 445,
        background: "rgba(0,0,0,0.5)",
      margin:"20px",
  },
  media: {
    height: 240,
    },
    title: {
      color:"#fff",
    },
      description: {
      color:"#fff",
  }
});

export default function ImageCard({place,checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked}
      {...(checked ? { timeout: 6000 } : {})}
    >
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
             {place.description}
          </Typography>
        </CardContent>
       
      
      </Card>
      </Collapse>
  );
}
