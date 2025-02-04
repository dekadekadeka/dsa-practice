# https://www.codewars.com/kata/5620281f0eeee479cd000020
def union_jack(n)
  return false if !n.is_a?(Integer)

  n = n.ceil if n.is_a?(Float)
  n = 7 if n < 7

  # 3 Xs across for odd numbers
  # 4 Xs across for even numbers

  # 1 loop for the first half
  (n / 2).ceil.times do
    p 'boop'
  end
  # make the central band
  (n % 2 == 1 ? 1 : 2).times do
    p 'X' * n
  end
  # 1 loop for the bottom half
  (n / 2).ceil.times do
    p 'boop'
  end

end

# union_jack(2) # return "X--X--X\n-X-X-X-\n--XXX--\nXXXXXXX\n--XXX--\n-X-X-X-\nX--X--X"
union_jack(8) # return "X--XX--X\n-X-XX-X-\n--XXXX--\nXXXXXXXX\nXXXXXXXX\n--XXXX--\n-X-XX-X-\nX--XX--X"
