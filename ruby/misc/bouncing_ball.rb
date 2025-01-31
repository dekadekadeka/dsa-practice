# https://www.codewars.com/kata/5544c7a5cb454edb3c000047
def bouncing_ball(h, bounce, window)
  return -1 if h < 0 || h < window
  return -1 if bounce < 0 || bounce >= 1

  # drop counts as 1
  drop = 1
  # each time the bounce is still above window, increase by 2
  while h >= window
    h = h * bounce
    bounce = bounce * bounce
    drop += 1
  end

  drop
end

p bouncing_ball(3, 0.66, 1.5) # return 3
p bouncing_ball(30, 0.66, 1.5) # return 15
p bouncing_ball(30, 0.75, 1.5) # return 21
p bouncing_ball(30, 0.4, 10) # return 3
p bouncing_ball(40, 1, 10) # return -1 because the conditions weren't met
p bouncing_ball(-5, 0.66, 1.5) # return -1
