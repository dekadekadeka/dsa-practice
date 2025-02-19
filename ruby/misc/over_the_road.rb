# https://www.codewars.com/kata/5f0ed36164f2bc00283aed07
def over_the_road(address, n)
  # my solution
  return n * 2 if address == 1
  # max odd: (n * 2) - 1
  # max even: n * 2
  # find the number across the street from address, given that odd numbers are on the left
  # and decrease by 2 n times until reaching 1, while the even numbers are on the right and start at 2,
  # and increase by 2 n times.
  # 1|   |6
  # 3|   |4
  # 5|   |2
  # if address is 1, then find the even number on the opposite side
  # (since 1 is the lowest possible odd, the answer will be the max possible even, so n * 2)
  # find which position address is on its corresponding side (odd/even), and return the opposite number.
  # (same position on the opposite side)
  # hint 1: find how many steps from the bottom address is, and then add/subtract 2 * that many steps from the opposite side
  # min/max number.
  place = address.odd? && address > 1 ? (address / 2) + 1 : address / 2
  diff = address.odd? ? 2 * place - 2 : 2 * place - 1
  n * 2 - diff

  # the best solution
  # so simple...
  # get the max address number (2 * n) and add 1 to it to "switch" to the opposite (odd/even) side
  # then subtract the address
  # 2 * n + 1 - address
end

over_the_road(1, 3) # return 6
over_the_road(3, 3) # return 4
over_the_road(2, 3) # return 5
over_the_road(3, 5) # return 8
over_the_road(7, 11) # return 16
