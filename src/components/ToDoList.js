import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ToDoList() {
  const items = useSelector((state) => state.toDo.items);

  return (
    <>
      {items.map((item) => (
        <Box
          sx={{
            minWidth: 275,
            maxWidth: 300,
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Card variant="outlined" key={item}>
            <CardContent
              sx={{ textAlign: "center", backgroundColor: "#F9BE61" }}
            >
              <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                {item}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
      {/* <p >LOL</p>
      <p >HAHA</p> */}
    </>
  );

  //   return items.map((item) => <p>{item}</p>);
}

export default ToDoList;
