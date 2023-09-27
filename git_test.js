function solution(my_string, num1, num2) {
  var answer = "";
  let str_arr = my_string.split("");
  let switch_arr = str_arr[num1];
  str_arr[num1] = str_arr[num2];
  str_arr[num2] = switch_arr;
  answer = str_arr.join("");

  return answer;
}

solution("hello", 1, 2);
