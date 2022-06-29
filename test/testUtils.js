const template = {
  attendance: {
    month: "string",
    year: "number",
    highest: {
      museum: "string",
      visitors: "number",
    },
    lowest: { museum: "string", visitors: "number" },
    ignored: {
      museum: "string",
      visitors: "number",
    },
    total: "number",
  },
};

const templateWithoutIgnore = {
  attendance: {
    month: "string",
    year: "number",
    highest: {
      museum: "string",
      visitors: "number",
    },
    lowest: { museum: "string", visitors: "number" },
    total: "number",
  },
};

const extractKeys = (obj, prefix = "") =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === "object" && obj[el] !== null) {
      return [...res, ...extractKeys(obj[el], prefix + el + ".")];
    }
    return [...res, prefix + el];
  }, []);

const isPropertiesEqual = (a, b) => {
  return extractKeys(a).sort().toString() == extractKeys(b).sort().toString();
};



module.exports = {template,templateWithoutIgnore,isPropertiesEqual}