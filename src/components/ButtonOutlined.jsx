import Button from '@mui/joy/Button';

export default function ButtonOutlined(fun, text) {
  return (
    <Button variant="outlined" onClick={fun()}>{text}</Button>
  );
}