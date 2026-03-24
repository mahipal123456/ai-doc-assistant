let storedEmbeddings = [];

const setEmbeddings = (data) => {
  storedEmbeddings = data;
};

const getEmbeddings = () => storedEmbeddings;

module.exports = { setEmbeddings, getEmbeddings };