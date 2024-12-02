const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World",
    user: "Peter",
    added: new Date(),
  },
  {
    text: "Mamma Mia",
    user: "Bonjovi",
    added: new Date(),
  },
];

const index = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};

const new_mes = (req, res) => {
  console.log(req.body);
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = {
  index,
  new_mes,
};
