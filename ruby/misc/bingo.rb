# https://www.codewars.com/kata/57f625992f4d53c24200070e
def bingo(ticket, win)
  win_count = 0

  ticket.each do |sub_arr|
    if sub_arr.first.codepoints.include?(sub_arr.last)
      win_count += 1
    end
  end

  win_count >= win ? "Winner!" : "Loser!"
end

bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) # return 'Loser!'
bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1) # return 'Winner!'
bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3) # return 'Loser!'
