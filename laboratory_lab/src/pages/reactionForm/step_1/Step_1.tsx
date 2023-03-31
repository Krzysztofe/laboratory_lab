import RadioInput from "../../../components/inputs/radioInput/RadioInput";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { alcaloidsData } from "./dataStep_1";
import SelectInput from "../../../components/inputs/selectInput/SelectInput"
export interface Props {
  reaction: any;
  handleChange: any;
  errors: any;
}

const Step_1 = (props: Props): JSX.Element => {
  const handleAlcaloidsChange = (e: ChangeEvent) => {
    return props.handleChange({ alcaloids: e.target.value });
  };

  const handleTechnics = (e: ChangeEvent) => {
    return props.handleChange({ technics: e.target.value });
  };
  const handleTextChange = (e: ChangeEvent) => {
    return props.handleChange({ name: e.target.value });
  };
  const handleSelectChange = (value: string | number) => {
    props.handleChange({ selectMilimolles: value });
  };
  return (
    <section className="stepContainer">
      <TextInput
        type={"text"}
        name={"name"}
        value={props.reaction.name}
        onChange={handleTextChange}
        text={"Nazwa reakcji"}
        placeholder={"Nazwa"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.name}</small>
      </div>

      <SelectInput
        label={"Ilość moli substratu"}
        inputName={"selectMilimolles"}
        selectValues={[1, 2, 3, 4, 5, 6]}
        value={props.reaction.selectMilimolles}
        handleChange={handleSelectChange}
        classContainer="reaction__selectContainer"
        classLabel="reaction__selectLabel"
        classInputTop="reaction__selectTop"
        classOptionsContainer="reaction__selectOptionsContainer"
        classOption="reaction__selectOption"
      />
      <div className="reaction__error">
        <small>{props.errors.selectMilimolles}</small>
      </div>

      <p className="reaction__radioInputHeader">Alkaloid</p>
      {alcaloidsData.map(alcaloid => {
        return (
          <RadioInput
            key={alcaloid}
            value={alcaloid}
            onChange={handleAlcaloidsChange}
            checked={props.reaction.alcaloids === alcaloid}
            classContainer={"reaction__radioContainer"}
            classInupt={"reaction__radioInput"}
            classLabel={"reaction__radioLabel"}
          />
        );
      })}
      <div className="reaction__error">
        <small>{props.errors.alcaloids}</small>
      </div>
      <TextInput
        type={"text"}
        name={"technics"}
        value={props.reaction.technics}
        onChange={handleTechnics}
        text={"Technika"}
        placeholder={"Technika"}
        classContainer={"reaction__textInputContainer"}
        classLabel={"reaction__textInputLabel"}
        classInput={"reaction__textInput"}
      />
      <div className="reaction__error">
        <small>{props.errors.technics}</small>
      </div>
    </section>
  );
};

export default Step_1;
