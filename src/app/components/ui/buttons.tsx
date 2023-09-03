import {
  AnglesDownIcon,
  AngleDownIcon,
  AnglesUpIcon,
  AngleUpIcon,
  GripLinesIcon,
  IconButton,
} from ".";
import { IconButtonProps } from ".";

export function AngleDownBtn(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <AngleDownIcon />
    </IconButton>
  );
}

export function AnglesDownBtn(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <AnglesDownIcon />
    </IconButton>
  );
}

export function AnglesUpBtn(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <AnglesUpIcon />
    </IconButton>
  );
}

export function AngleUpBtn(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <AngleUpIcon />
    </IconButton>
  );
}

export function GripLinesBtn(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <GripLinesIcon />
    </IconButton>
  );
}
