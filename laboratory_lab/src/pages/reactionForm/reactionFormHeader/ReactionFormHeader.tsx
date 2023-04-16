interface Props {
  steps: JSX.Element[];
  currentStepIdx: number
}

const ReactionFormHeader = (props:Props) => {
      const reactionFormHeaderData = [
        "Podstawowe reagenty",
        "Techniki laboratoryjne",
        "Przebieg reakcji",
        "Podsumowanie",
      ];
    return (
      <header className="wrapper wrapper--formReactionHeader ">
        <p className="formReaction__stepIdx ">
          Krok {props.currentStepIdx + 1}/{props.steps.length}
        </p>
        <h2 className="formReaction__topDescription">
          {reactionFormHeaderData[props.currentStepIdx]}
        </h2>
      </header>
    );
};

export default ReactionFormHeader;