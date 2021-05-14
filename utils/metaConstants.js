const META = {
  "/": {
    title: "Home",
    description: "Home Description",
  },
  "/login": {
    title: "Login",
    description: "Login Description",
  },
};

export const getPageMeta = (page = "/") => {
  return META[page];
};
