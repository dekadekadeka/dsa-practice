# https://www.codewars.com/kata/57eaec5608fed543d6000021/
def div_con(x)
  # Given a mixed array of number and string representations of integers, add up the non-string integers
  # and subtract the total of the string integers.
  # Return as a number.
  nums = 0
  strs = 0

  x.each do |n|
    n.is_a?(Numeric) ? nums += n : strs += n.to_i
  end

  nums - strs
end

div_con([9, 3, '7', '3']) # return 2
div_con(['5', '0', 9, 3, 2, 1, '9', 6, 7]) # return 14
div_con(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) # return 13
div_con(['1', '5', '8', 8, 9, 9, 2, '3']) # return 11
div_con([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]) # return 61
