export default (req, res) => {
  const { name } = "world";
  res.status(200).send(`Hello ${name}!`);
}
