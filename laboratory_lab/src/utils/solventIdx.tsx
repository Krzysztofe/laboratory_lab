export const solventIdx = (solvent: string) => {
  return solvent.split("").map(char => {
    return isNaN(Number(char)) ? (
      char
    ) : (
      <small key={crypto.randomUUID()} className="solventIdx">
        {char}
      </small>
    );
  });
};
