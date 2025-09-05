const randomPrice = () => {
  let num = `${Math.floor(Math.random() * 10 + 35)}.99`;
  return +num;
};

export { randomPrice };
