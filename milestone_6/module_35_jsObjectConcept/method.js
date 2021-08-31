const student = {
  id: 101,
  money:5000,
  name: "RJ kibrea",
  major: "Mathematics",
  isRich: false,
  subjects: ["english", "chemistry", "accounting", "calculas"],
  bestFriend: {
    name: "kundu",
    major: "Mathematics",
  },
  takeExam: function () {
    console.log(this.name, " Taking exam");
  },
  treatDe:function(expense,boksis){
      this.money -=expense+boksis;
      return this.money 
  }
};

student.takeExam()
console.log(student.treatDe(100,50));
console.log(student.treatDe(100,50));