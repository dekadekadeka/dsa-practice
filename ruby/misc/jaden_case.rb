# https://www.codewars.com/kata/5390bac347d09b7da40006f6
def jaden_case(str)
  str.split(' ').map { |w| w.capitalize }.join(' ')
end

jaden_case("How can mirrors be real if our eyes aren't real")
