import Button from '@mui/joy/Button';

export default function ButtonSolid(fun, text) {
  return (
    <Button variant="solid" onClick={fun()}>{text}</Button>
  );
}