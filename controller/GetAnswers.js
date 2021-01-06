import React, { Component } from "react";

export default class GetAnswers {
  getAnswer() {
    return this.readAnswerFromJSONFile();
  }

  readAnswerFromJSONFile() {
    let answers;
    answers = require('./Answers.json');
    console.log(answers);
    console.log(answers.length);
    let index = Math.floor(Math.random() * (answers.length));
    console.log(answers[index]);
    return answers[index];
  }
}