import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { editItemActions } from "../store/todo-slice";
import { useState } from "react";
import classes from "./Input.module.css";

function Input() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const addItemHandler = () => {
    dispatch(editItemActions.addItem(inputValue));
    setInputValue("");
  };

  const inputChangeHandler = (e) => setInputValue(e.target.value);

  return (
    <div className={classes["input-box"]}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            id="enterTask"
            label="Enter Task"
            variant="outlined"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          <Button variant="contained" onClick={addItemHandler}>
            Enter
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Input;
