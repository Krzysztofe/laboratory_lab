export const solventIdx = (solvent: string) => {
  return solvent?.split("").map(char => {
    // return isNaN(parseInt(char)) ? (
    //   char
    // ) : (
    //   <small key={crypto.randomUUID()} className="solventIdx">
    //     {char}
    //   </small>
    // );
    if (char === " ") {
      return <small>&nbsp;</small>;
    } else if (isNaN(parseInt(char))) {
      return char;
    } else {
      return (
        <small key={crypto.randomUUID()} className="solventIdx">
          {char}
        </small>
      );
    }
  });
};

const ggg = "lll    u kla";

const hh = ggg.split("").map(item => {
  return isNaN(parseInt(item)) ? "o" : " ";
});

console.log("", hh);
