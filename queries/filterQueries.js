const { filterResponses, checkForDuplicates } = require("./helper/filter");
const { API_KEY, DEMO_FORM_ID } = process.env;
const API = process.env.API;
const axios = require("axios");

const filteredResponses = async (req, res, next) => {
  const getFilteredResponses = async () => {
    const filters = [req.body];
    try {
      const res = await axios.get(
        `${API}/v1/api/forms/${DEMO_FORM_ID}/submissions`,
        {
          headers: {
            Authorization: `Bearer ` + `${API_KEY}`,
          },
        }
      );
      const { data } = res;
      const responses = data;

      const filtered = filterResponses(responses, filters);
      const filteredResponses = checkForDuplicates(filtered);

      return filteredResponses;
    } catch (error) {
      console.log(error);
    }
  };
  const filtered = await getFilteredResponses();
  res.status(200).json({
    filteredResponses: filtered,
  });
  next();
};

module.exports = { filteredResponses };
