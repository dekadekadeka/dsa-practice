# https://www.codewars.com/kata/5648b12ce68d9daa6b000099
def number(bus_stops)
  bus_stops.map { |b| b.inject(:-) }.sum
end

number([[10, 0], [3, 5], [5, 8]])
