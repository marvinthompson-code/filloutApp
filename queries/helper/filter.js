const checkForDuplicates = (arr) => {
  const set = new Set([]);
  arr.forEach((el) => {
    set.add(el);
  });
  return Array.from(set);
};

const checkIfMatch = (condition, value1, value2) => {
  let isMatch = false;
  if (condition === "equals") {
    res = value1 === value2 ? true : false;
    if (res === true) {
      isMatch = true;
    }
  } else if (condition === "greater_than") {
    res = value1 > value2;
    if (res === true) {
      isMatch = true;
    }
  } else if (condition === "does_not_equal") {
    res = value1 !== value2;
    if (res === true) {
      isMatch = true;
    }
  }
  return isMatch;
};

const filterQuestions = (
  questions,
  checkIfMatch,
  currentCondition,
  currentFilterValue
) => {
  let foundMatch = false;
  const matchHelper = (questions) => {
    let isMatch = false;
    questions.forEach((q) => {
      const currentQuestion = q;
      const currentQuestionValue = currentQuestion.value;
      const match = checkIfMatch(
        currentCondition,
        currentFilterValue,
        currentQuestionValue
      );
      if (match === true) {
        isMatch = true;
      }
    });
    return isMatch;
  };

  if (matchHelper(questions) === true) {
    foundMatch = true;
  }
  return foundMatch;
};

const convertResponse = (obj) => {
  return [obj];
};

const extractQuestions = (r) => {
  let output = [];
  const { responses } = r;
  responses.forEach((el) => {
    const { questions } = el;
    output = questions;
  });
  return output;
};

const filterResponses = (responses, filters) => {
  let filtered = [];
  const finalOutput = [];

  filters.forEach((f) => {
    const currentFilterValue = f.value;
    const currentCondition = f.condition;
    const convertedResponses = convertResponse(responses);

    const parseResponses = () => {
      const res = convertedResponses.forEach((r) => {
        const output = [];
        const questions = extractQuestions(r);

        const match = filterQuestions(
          questions,
          checkIfMatch,
          currentCondition,
          currentFilterValue
        );
        if (match) {
          finalOutput.push(r);
        }
        return output;
      });
      filtered.push(res);
    };
    parseResponses();
  });

  console.log("isMatch: ", finalOutput);
  return finalOutput;
};

module.exports = {
  filterResponses,
  checkForDuplicates,
};
