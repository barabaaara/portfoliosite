// 年齢取得関数
function getAge() {
    var age = 0;
    var today = new Date();
    var date1 = new Date(today.getFullYear(), 3, 8, 0, 0, 0);
    var birthYear = 1993;

    if (today > date1) {
        age = today.getFullYear() - birthYear;
    } else {
        age = today.getFullYear() - birthYear + 1;
    }

    return age;
}