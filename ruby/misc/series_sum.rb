# https://www.codewars.com/kata/555eded1ad94b00403000071

def series_sum(n)
  return '0.00' if n == 0

  sum = 1
  base_fraction = 4

  (n - 1).times do
    sum += (1.00 / base_fraction)
    base_fraction += 3
  end

  # return the sum as a string with 2 decimal points
  '%.2f' % sum
end

p series_sum(1) # return "1.00"
p series_sum(2) # return "1.25"
p series_sum(3) # return "1.39"
