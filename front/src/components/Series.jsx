import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: "10px",
  },
  media: {
    height: 200,
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
}));

const style = {
  padding: "20px",
};
function Series({ series }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={series.name} />
      <span style={style}>
        {series.genres != false ? (
          series.genres.map((genre) => {
            return (
              <h4 style={{ display: "inline-block" }}>{genre} &nbsp;&nbsp; </h4>
            );
          })
        ) : (
          <h4>Genre not given</h4>
        )}
      </span>

      <CardActionArea>
        <CardMedia className={classes.media} image={series.image.medium} />
        <CardContent>For a short summar please click on the arrow</CardContent>
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <span>{series.summary.replace(/<\/?[^>]+(>|$)/g, "")}</span>
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}

export default Series;
