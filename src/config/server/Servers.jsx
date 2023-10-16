const local = {
  baseUrlApi: "http://localhost:1234",
};

const staging = {
  baseUrlApi: "https://mogo-k78y.onrender.com",
};

const config = {
  local,
  staging,
};

export default config["staging"];
