# https://www.codewars.com/kata/54c27a33fb7da0db0100040e
def is_square(x)
  return false if x < 0

  Integer::sqrt(x)*Integer::sqrt(x) == x
end

# other way, Math.sqrt returns a float
# Return true if the sqrt of the number is divisible by one with no remainder
# otherwise, Math.sqrt(x) % 1 will return a float between 0.0 and 1.0
def is_square_one_line(x)
  Math.sqrt(x) % 1 == 0
end

is_square(25)
is_square_one_line(25)
