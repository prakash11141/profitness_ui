import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const ProductCard = (props) => {
  return (
    <Card
      sx={{
        width: "25%",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{
          width: "300px",
          marginTop: "1rem",
          height: "300px",
        }}
      />
      {/* <CardMedia
        sx={{ height: 200 }}
        image="https://www.bowflex.com/dw/image/v2/AAYW_PRD/on/demandware.static/-/Sites-nautilus-master-catalog/default/dw9338bbb0/images/bfx/treadmills/100910/t22-treadmill-in-home-m-ll.jpg?sw=2600&sh=1464&sm=fit"
        title="green iguana"
      /> */}
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Chip label={props.brand} color="primary" variant="outlined" />
        </Stack>
        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
