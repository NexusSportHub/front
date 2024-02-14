import Button from '@mui/joy/Button';

export default function ButtonDisabled(fun, text) {
  return (
    <Button disabled onClick={fun()}>{text}</Button>
  );
}