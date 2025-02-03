# https://www.codewars.com/kata/5b817c2a0ce070ace8002be0
def display_board(board, width)
  # original solution
  # pointer = 0
  # result = []

  # while pointer < board.length
  #   result.push(" #{board.slice(pointer, width).join(' | ')} ")
  #   pointer += width
  # end

  # solution after finding each_slice
  result = []

  board.each_slice(width) { |section| result << " #{section.join(' | ')} " }

  result.join("\n#{'-' * result.first.length}\n")
end

display_board(["O", "X", "X", "O"], 2) # return " O | X \n-------\n X | O "
display_board(["O", "X", " ", " ", "X", " ", "X", "O", " "], 3) # return " O | X |   \n-----------\n   | X |   \n-----------\n X | O |   "
display_board(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], 5) # return " O | X |   |   | X \n-------------------\n   | X | O |   | O "
