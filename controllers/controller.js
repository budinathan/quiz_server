import Questions from "../models/questionModel.js";
import Result from "../models/resultModel.js";
import questions, { answers } from "../database/data.js";

//get all question
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (err) {
    res.json({ err });
  }
}

//insert all question
export async function insertQuestions(req, res) {
  Questions.insertMany({ questions, answers })
    .then(function () {
      res.json({ msg: "Data saved" });
    })
    .catch(function (err) {
      res.json({ msg: "err found" });
    });
}

//delete all question
// export async function dropQuestion(req, res) {
//   try {
//     await Questions.deleteMany();
//     res.json({ msg: "Questions Deleted" });
//   } catch (err) {
//     res.json({ err });
//   }
// }

//get all reseult
export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.json(r);
  } catch (err) {
    res.json({ err });
  }
}

//post all result
export async function storeResult(req, res) {
  const { username, result, attempts, points } = req.body;
  if (!username && !result) throw new Error("Data not found");

  Result.create({ username, result, attempts, points })
    .then(function () {
      res.json({ msg: "Result saved" });
    })
    .catch(function (err) {
      res.json({ msg: "err found" });
    });
}

//delete result
// export async function dropResult(req, res) {
//   try {
//     await Result.deleteMany();
//     res.json({ msg: "Delete succesfully" });
//   } catch (err) {
//     res.json({ err });
//   }
// }
