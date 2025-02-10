# https://www.codewars.com/kata/5bb0c58f484fcd170700063d/
def pillars(num_of_pillars, distance, width)
  return 0 if num_of_pillars < 2

  ((num_of_pillars - 1) * distance * 100) + (width * (num_of_pillars - 2))
end

p pillars(1, 10, 10) # return 0
p pillars(2, 20, 25) # return 2000
p pillars(11, 15, 30) # return 15270
