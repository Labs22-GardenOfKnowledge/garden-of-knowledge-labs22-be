
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('progress_report').del()
    .then(function () {
      // Inserts seed entries
      return knex('progress_report').insert([
        { student_id: 1, teacher_id: 1, course_id: 1, report_date: '2019-5-10', speaking_fluency: 5, speaking_accuracy: 5, vocabulary: 8, pronunciation: 5, grammar: 5, listening: 8, writing: 5, reading: 1, interest: 5, participation: 4, submitting_homework: 5, homework_effort: 3, overall: 5, notes: 'Student is doing okay.' },
        { student_id: 1, teacher_id: 1, course_id: 1, report_date: '2019-5-15', speaking_fluency: 5, speaking_accuracy: 5, vocabulary: 8, pronunciation: 5, grammar: 5, listening: 5, writing: 5, reading: 1, interest: 5, participation: 7, submitting_homework: 5, homework_effort: 7, overall: 5, notes: 'Student is doing okay.' },
        { student_id: 2, teacher_id: 1, course_id: 1, report_date: '2019-5-10', speaking_fluency: 8, speaking_accuracy: 5, vocabulary: 5, pronunciation: 5, grammar: 4, listening: 5, writing: 5, reading: 6, interest: 5, participation: 8, submitting_homework: 10, homework_effort: 10, overall: 5, notes: 'Student is doing okay.' },
        { student_id: 3, teacher_id: 2, course_id: 2, report_date: '2019-5-10', speaking_fluency: 5, speaking_accuracy: 5, vocabulary: 6, pronunciation: 9, grammar: 5, listening: 5, writing: 5, reading: 5, interest: 5, participation: 5, submitting_homework: 9, homework_effort: 3, overall: 5, notes: 'Student is doing okay.' },
        { student_id: 4, teacher_id: 3, course_id: 3, report_date: '2019-5-10', speaking_fluency: 7, speaking_accuracy: 5, vocabulary: 5, pronunciation: 5, grammar: 5, listening: 5, writing: 5, reading: 5, interest: 5, participation: 4, submitting_homework: 9, homework_effort: 5, overall: 9, notes: 'Student is doing okay.' },
        { student_id: 4, teacher_id: 3, course_id: 3, report_date: '2019-6-12', speaking_fluency: 7, speaking_accuracy: 5, vocabulary: 5, pronunciation: 5, grammar: 5, listening: 1, writing: 5, reading: 5, interest: 5, participation: 3, submitting_homework: 5, homework_effort: 5, overall: 9, notes: 'Student is doing okay.' },
        { student_id: 5, teacher_id: 2, course_id: 2, report_date: '2019-5-10', speaking_fluency: 3, speaking_accuracy: 5, vocabulary: 5, pronunciation: 7, grammar: 5, listening: 5, writing: 8, reading: 5, interest: 5, participation: 5, submitting_homework: 6, homework_effort: 7, overall: 5, notes: 'Student is doing okay.' },
        { student_id: 6, teacher_id: 1, course_id: 1, report_date: '2019-5-10', speaking_fluency: 5, speaking_accuracy: 5, vocabulary: 8, pronunciation: 5, grammar: 5, listening: 5, writing: 8, reading: 7, interest: 5, participation: 8, submitting_homework: 1, homework_effort: 5, overall: 6, notes: 'Student is doing okay.' }
      ]);
    });
};