# https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
def is_palindrome str
  start_pointer = 0
  tail_pointer = str.length - 1

  while (start_pointer < str.length / 2) do
    return false unless str[start_pointer].casecmp?(str[tail_pointer])
    
    start_pointer += 1
    tail_pointer -= 1
  end

  true
end

# one line solution
def is_palindrome_one_line(str)
  str.casecmp?(str.reverse)
end

is_palindrome("Abba")
is_palindrome_one_line('hello')
