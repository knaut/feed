import generate from 'nanoid/generate'

export default function id () {
  const idChars = `123456789abcdefhijklmnopqrstuvwxyz`
  const idLimit = 20

  return generate(idChars, idLimit)
};
