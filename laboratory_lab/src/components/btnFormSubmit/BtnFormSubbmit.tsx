export interface Props {
  label: string;
  class?: string;
}


const BtnFormSubbmit = (props:Props) => {
  return <button className={props.class}> {props.label}</button>;
};

export default BtnFormSubbmit;
