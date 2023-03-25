export interface Props {
  text: string;
  class?: string;
}


const BtnFormSubbmit = (props:Props) => {
  return <button className={props.class}> {props.text}</button>;
};

export default BtnFormSubbmit;
