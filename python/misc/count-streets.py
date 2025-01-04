# https://www.codewars.com/kata/66fc9ca2e6d1d0e9cc2e4a4c/
def count_streets(streets, drivers):
  streets_hash = {street: idx for idx, street in enumerate(streets)}

  return [abs(streets_hash[cs[0]] - streets_hash[cs[1]]) - 1 for cs in drivers]

count_streets(["first", "second", "third", "fourth", "fifth", "sixth", "seven"],
              [("first", "second"), ("second", "seven"), ("sixth", "fourth") ]) # return [0, 4, 1]

count_streets(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
              [("j", "a"), ("b", "i"), ("c", "d"), ("e", "j"), ("i", "g"), ("a", "i"), ("f", "e"), ("a", "j"), ("e", "a"), ("e", "h"), ("h", "b")])
# return [8,6,0,4,1,7,0,8,3,2,5]
