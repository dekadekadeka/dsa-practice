# https://www.codewars.com/kata/5eb34624fec7d10016de426e
def martingale(bank, results)
  stake = 100

  results.each do |a, b|
    if a == 1
      bank += gain
      stake = 100
    else
      bank -= gain
      stake *= 2
    end
  end

  bank
end

martingale(500, []) # return 500
martingale(1000, [1, 1, 0, 0, 1]) # return 1300
martingale(0, [0, 0, 0, 0, 1, 0, 0,]) # return -200
martingale(5100, [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) # return 5600
martingale(-500, [1, 1, 0, 1, 0, 1, 0]) # return -200
