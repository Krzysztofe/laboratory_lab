export interface ModelTextInput {
  type: string;
  name?: string;
  value?: string | number;
  onChange: any;
  handleBlur?:any;
  text: string;
  placeholder?: string;
  classContainer?: string;
  classLabel?: string;
  classInput?: string;
}
