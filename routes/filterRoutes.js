const route = require("express").Router();
const { filteredResponses } = require("../queries/filterQueries");
const DEMO_FORM_ID = process.env.DEMO_FORM_ID;

route.get(`/${DEMO_FORM_ID}/filteredResponses`, filteredResponses);

module.exports = route;
