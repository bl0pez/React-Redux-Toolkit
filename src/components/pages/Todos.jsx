import { Container } from "@mui/system";
import { useGetTodoIdQuery, useGetTodosQuery } from "../../store/apis";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  Typography,
} from "@mui/material";
import { BookmarkBorder, BookmarkAdded } from "@mui/icons-material";
import { useState } from "react";
import { ButtonArrow } from "../ui/ButtonArrow";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const Todos = () => {
  const [todoId, setTodoId] = useState(1);

  // const { data = [], isLoading } = useGetTodosQuery();
  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const backTodo = () => {
      if(todoId === 1) return;
      setTodoId(todoId - 1)
  }
  
  const { data = null , isLoading } = useGetTodoIdQuery(todoId);


  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        minHeight: "100vh",
        minWidth: "100%",
        color: "white",
        padding: "20px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item alignItems="center" justifyContent="center" display="flex">
          <pre>{JSON.stringify(data)}</pre>
        </Grid>
      </Grid>
      <ButtonArrow isLoading={isLoading} func={backTodo}>
        <ArrowBack sx={{ fontSize: 30 }} />
      </ButtonArrow>
      <ButtonArrow isLoading={isLoading} func={nextTodo}>
        <ArrowForward sx={{ fontSize: 30 }} />
      </ButtonArrow>
      <Typography variant="h5">
        isLoading:
        {isLoading ? "True" : "False"}
      </Typography>
      {/* ===GetTodos=== */}
      {/* <List>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
            <List>
              {
                data.map((todo) => (
                <ListItem key={todo.id} >
                  <ListItemAvatar>
                    {
                      todo.completed 
                        ? ( <BookmarkAdded  color="success" sx={{ fontSize: 40 }}/>)
                        : (<BookmarkBorder sx={{ fontSize: 40 }}/>)
                    }

                  </ListItemAvatar>
                  <ListItemText
                    primary={todo.title}
                    secondary="dasdas"
                  />
                </ListItem>
                ))
              }
            </List>
        </Grid>
      </List> */}
    </Container>
  );
};
