//Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    // Code here
    let sum = s1 + s2 + s3
    avgGrade = sum / 3

    if (avgGrade <= 100 && avgGrade >= 90) {
        return 'A'
    } else if (avgGrade < 90 && avgGrade >= 80) {
        return 'B'
    } else if (avgGrade < 80 && avgGrade >= 70) {
        return 'C'
    } else if (avgGrade < 70 && avgGrade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}
