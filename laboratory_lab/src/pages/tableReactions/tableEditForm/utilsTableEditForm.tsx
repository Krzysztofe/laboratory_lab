export {}

//   const toString = (solventsValue: any) => {
//     if (Array.isArray(solventsValue)) {
//       return solventsValue.join(", ");
//     }
//     return solventsValue;
//   };

//   const string = toString(editedReaction.solvents);

//   const formatValue = (value: any) => {
//     const select = value.split("").map((char?: any) => {
//       return isNaN(Number(char)) ? (
//         char
//       ) : (
//         <small className="numberInCheckbox" key={crypto.randomUUID()}>
//           {char}
//         </small>
//       );
//     });