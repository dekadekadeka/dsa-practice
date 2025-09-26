# https://www.hackerrank.com/challenges/repeated-string/
def repeated_string(s, n):
  if 'a' not in s:
      return 0
  if len(s) == 1:
      return n
  
  remainder = 0

  if (n // len(s)) * len(s) < n:
    # check the difference between (n // len(s)) * len(s) and n
    diff = n - ((n // len(s)) * len(s))
    # check the first diff charachers of s, and count how many 'a's are there
    # this is the remainder
    remainder = s[0:diff].count('a')
  
  return (n // len(s)) * s.count('a') + remainder
  
repeated_string('jdiacikk', 899491) # return 112436
repeated_string('x', 970770) # return 0
repeated_string('aba', 10) # return 7
repeated_string('gfcaaaecbg', 547602) # return 164280
