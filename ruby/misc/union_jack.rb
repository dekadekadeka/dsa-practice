# https://www.codewars.com/kata/5620281f0eeee479cd000020
def union_jack(n)
  return false if !n.is_a?(Numeric)
  n = n.ceil if n.is_a?(Float)

  n = 7 if n < 7

  result = []
  # number of rows above and below the central band
  rows = n % 2 == 0 ? ((n - 1) / 2) : (n / 2)

  left_pointer = 0
  right_pointer = n - 1

  base_arr = Array.new(n, '-')
  base_arr[left_pointer] = 'X'
  base_arr[right_pointer] = 'X'

  # add the middle Xs, these don't change
  base_arr[rows] = 'X'
  if (n % 2 == 0)
    base_arr[rows + 1] = 'X'
  end

  # push the initial array into the result
  result << base_arr.join

  # 1 loop for the first half
  (rows.ceil - 1).times do
    # get the Xes on the outside to get one spot closer to the middle per iteration
    # switch positions on the left side
    temp = base_arr[left_pointer]
    base_arr[left_pointer] = base_arr[left_pointer + 1]
    base_arr[left_pointer + 1] = temp

    # switch positions on the right
    temp = base_arr[right_pointer]
    base_arr[right_pointer] = base_arr[right_pointer - 1]
    base_arr[right_pointer - 1] = temp

    # push the switched array into the result
    result << base_arr.join

    left_pointer += 1
    right_pointer -= 1
  end

  # make the central band
  # 2 rows for even numbers, 1 row for odd
  (n % 2 == 0 ? 2 : 1).times do
    result << 'X' * n
  end

  # push the current base array into the result to begin the bottom half
  # we have to do this now because the loop will switch the positions
  result << base_arr.join

  # now do the same thing in reverse for the bottom half!
  (rows.ceil - 1).times do
    temp = base_arr[left_pointer]
    base_arr[left_pointer] = base_arr[left_pointer - 1]
    base_arr[left_pointer - 1] = temp

    # switch positions on the right
    temp = base_arr[right_pointer]
    base_arr[right_pointer] = base_arr[right_pointer + 1]
    base_arr[right_pointer + 1] = temp

    # push the switched array into the result
    result << base_arr.join

    left_pointer -= 1
    right_pointer += 1
  end

  result.join("\n")
end

p union_jack(2) # return "X--X--X\n-X-X-X-\n--XXX--\nXXXXXXX\n--XXX--\n-X-X-X-\nX--X--X"
p union_jack(8) # return "X--XX--X\n-X-XX-X-\n--XXXX--\nXXXXXXXX\nXXXXXXXX\n--XXXX--\n-X-XX-X-\nX--XX--X"
p union_jack('boop') # return false
