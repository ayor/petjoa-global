import React, { useRef, useState } from 'react';
import {
  Typography,
  Checkbox,
  TextField,
  FormControlLabel,
  TextareaAutosize,
  Paper,
  Button,
} from '@mui/material';

const Encryption = (props) => {
  //   const [file, setfile] = useState('');
  const [content, setcontent] = useState('');
  const [text, setText] = useState('');
  const [showDecrypt, setShowDecrypt] = useState(false);

  const fileRef = useRef('');

  const handleChange = (ev) => {
    readText(ev);
  };

  const readText = async (event) => {
    const file = event.target.files.item(0);
    if (!file) return;
    const text = await file.text();
    setcontent(text);
    setText(text);
  };

  const handleEncrypt = () => {
    setcontent(
      'LKJHBWRFIWRIFWUFBJWFII87074YR093URU7)*TW*^*)&T(*^&@T(*$&^@(*$&)@*&^@*$*)&$^&%^*O*)W*(*EGYE*@TE@*FD^*&@(*))E*(*@EYHGV@YE*^T&@(*)@O@U(*GV@*@(&@!(@*)(&)@)*@&#G@(*&@)($H$)*Y$)&@)(U$@*'
    );
    setShowDecrypt(true);
  };
  const handleDecrypt = () => {
    setcontent(text);
    setShowDecrypt(false);
  };

  return (
    <div className="row vh-100 ">
      <div className="col h-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <Paper
              style={{
                padding: '30px',
              }}
            >
              <Typography variant="h6">Select a File to Encrypt</Typography>
              <div className="m-2">
                <TextField type="file" ref={fileRef} onChange={handleChange} />
              </div>
              <div className="m-2">
                <TextareaAutosize
                  onChange={(ev) => setcontent(ev.target.value)}
                  maxRows={8}
                  aria-label="maximum height"
                  placeholder="Content"
                  value={content}
                  minRows={4}
                  style={{ width: '100%' }}
                />
              </div>
              <Typography> Set Attributes</Typography>
              <div className="m-2">
                <Typography> Select User Status </Typography>

                <FormControlLabel control={<Checkbox />} label="Admin" />
                <FormControlLabel control={<Checkbox />} label="Level 2" />

                {/* <FormGroup>
                  
                  
                </FormGroup> */}
              </div>

              <div className="m-2 d-flex justify-content-around">
                <Button variant="outlined" onClick={handleEncrypt}>
                  Encrypt
                </Button>
                {showDecrypt ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDecrypt}
                  >
                    Decrypt
                  </Button>
                ) : null}
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encryption;
