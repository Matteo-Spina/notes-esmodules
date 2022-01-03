export default (req, res) => {
  const name = "world";
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`Hello ${name}!`);
};
