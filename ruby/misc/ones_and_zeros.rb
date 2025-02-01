# https://www.codewars.com/kata/578553c3a1b8d5c40300037c
def binary_array_to_number(arr)
  Integer(arr.join(''), 2)
end 

p binary_array_to_number([0,0,0,1]) # return 1
p binary_array_to_number([0,0,1,0]) # return 2
p binary_array_to_number([1,1,1,1]) # return 15
p binary_array_to_number([0,1,1,0]) # return 6
