// src/components/shared/FormField.jsx
import React from 'react';
import { TextField } from '@mui/material';

const FormField = ({ label, type, value, onChange }) => (
  <TextField
    label={label}
    type={type}
    fullWidth
    required
    margin="normal"
    value={value}
    onChange={onChange}
  />
);

export default FormField;
