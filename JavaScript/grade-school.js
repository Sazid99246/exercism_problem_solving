//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor() {
        // Internal storage:
        // key   -> grade number
        // value -> array of student names in that grade
        this._roster = {};
    }

    /**
     * Add a student to a grade.
     * Returns:
     * - true  if the student was added
     * - false if the student is already in the roster (same grade or another grade)
     */
    add(name, grade) {
        // Normalize the input
        const studentName = String(name).trim();

        if (!studentName) return false;
        if (!Number.isInteger(grade) || grade < 1) return false;

        // Reject duplicates across the whole school
        for (const g in this._roster) {
            if (this._roster[g].includes(studentName)) {
                return false;
            }
        }

        // Create the grade if it does not exist
        if (!this._roster[grade]) {
            this._roster[grade] = [];
        }

        this._roster[grade].push(studentName);
        return true;
    }

    /**
     * Return a flat list of all students:
     * - grades sorted ascending
     * - names sorted alphabetically within each grade
     * Example: ['Anna','Barb','Charlie','Alex','Peter','Zoe','Jim']
     */
    roster() {
        const result = [];

        const grades = Object.keys(this._roster)
            .map(Number)
            .sort((a, b) => a - b);

        for (const grade of grades) {
            const sortedNames = [...this._roster[grade]].sort((a, b) =>
                a.localeCompare(b)
            );
            result.push(...sortedNames);
        }

        return result; // when empty => []
    }

    /**
     * Return the students in a specific grade, sorted alphabetically.
     */
    grade(grade) {
        if (!this._roster[grade]) return [];
        return [...this._roster[grade]].sort((a, b) => a.localeCompare(b));
    }
}