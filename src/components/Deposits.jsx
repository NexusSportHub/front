import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  let today = Date().toLocaleString();
  return (
    <React.Fragment>
      <Alert severity="warning" sx={{ margin: 0.5}}>
        Unpaid Bills
      </Alert>
      <Typography component="p" variant="h4">
        120,45 €
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check pending bills
        </Link>
      </div>
    </React.Fragment>
  );
}