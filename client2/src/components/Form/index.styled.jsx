import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

export const StyledPaper = styled(Paper)({
  padding: 16
});

export const StyledForm = styled('form')({
  '& .MuiTextField-root': {
    margin: 8,
  },
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
});

export const StyledFileUploadContainer = styled('div')({
  width: '97%',
  margin: '10px 0',
});

export const StyledButton = styled(Button)({
  marginBottom: 10,
});