export default function handler(request, response) {
  const { name } = "world";
  res.status(200).send(`Hello ${name}!`);
}
