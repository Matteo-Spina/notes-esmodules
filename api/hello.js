export default (req, res) => {
  const name = "world";
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`Hello ${name}!`);
};
