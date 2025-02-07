# https://www.codewars.com/kata/5783d8f3202c0e486c001d23
def to_number_array(string_array)
  # use &:to_f instead of  { |element| element.to_f } to apply the .to_f method to each element of the array
  string_array.map(&:to_f)
end

to_number_array(["1.1","2.2","3.3"]) # return [1.1,2.2,3.3]
