export default Array.from(Array(4), (_, k) => ({
  id: k,
  sound: new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${k + 1}.mp3`),
}));
