interface Props {
  message: JSX.Element | string;
  className: string;
}

const RequestMessage = (props: Props) => {
  return <div className={props.className}>{props.message}</div>;
};

export default RequestMessage;
