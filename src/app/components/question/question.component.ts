import { Component, OnInit } from '@angular/core';

import { QuestionService } from 'src/app/services/question.service';

import { IQuestion } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions: IQuestion[] = [];
  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService
      .getAll()
      .subscribe((questions) => (this.questions = questions));
  }
}
