const axios = require("axios");

const { getSuccessResponse } = require("../../utils/success");
const { getErrorResponse } = require("../../utils/error");

module.exports.main = async (event) => {
  try {
    const result = await axios({
      method: "get",
      url: process.env.APIURL,
    });

    const returnObj = {
      activeCases: result.data.active,
      todayCases: result.data.todayCases,
      totalCases: result.data.cases,
    };

    return getSuccessResponse(returnObj);
  } catch (error) {
    return getErrorResponse(error);
  }
};
