function gradingStudents(grades) {
	// Write your code here
	// const newGrades = grades.map((grade) => {
	// 	if (grade > 37) {
	// 		const diff = Math.abs((grade % 5) - 5);
	// 		if (diff < 3) {
	// 			return grade + diff;
	// 		}
	// 	}
	// 	return grade;
	// });
	// return newGrades;
	const getDiff = (grade) => {
		return Math.abs((grade % 5) - 5);
	};
	const testGrades = grades.map((grade) =>
		grade < 38 ? grade : getDiff(grade) < 3 ? grade + getDiff(grade) : grade
	);
	return testGrades;
}

console.log(gradingStudents([73, 67, 38, 33]));
