# https://www.codewars.com/kata/57a6633153ba33189e000074
def ordered_count(str)
  h = str.split("").each_with_object(Hash.new(0)) do |i, a|
    a[i] += 1
  end

  h.to_a
end

ordered_count("abracadabra") # return [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
ordered_count("Code Wars") # return [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]

# https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
# Holiday VIII - Duty Free
def duty_free(price, discount, holiday_cost)
	price_with_discount = price * (discount * 0.01)

  (holiday_cost / price_with_discount).floor
end

duty_free(12, 50, 1000) # return 166
duty_free(17, 10, 500) # return 294

# https://www.codewars.com/kata/544a54fd18b8e06d240005c0
def find_smallest(numbers, to_return)
  case to_return
    when "value"
      numbers.min
    when "index"
      numbers.index(numbers.min)
  end
end

find_smallest([5,4,3,2,1],"value") # return 1)
find_smallest([5,4,3,2,1],"index") # return 4)
find_smallest([ 8, 0, 9],"index") # return 1)
find_smallest([ 8, 0, 9],"value") # return 0)
find_smallest([ 1, 1, 0, 0, 1, 1],"value") # return 0)
find_smallest([ 1, 1, 0, 0, 1, 1],"index") # return 2)

# https://www.codewars.com/kata/51f9543d293a10a7a700004f
def sorted_hashes(array, key)
  array.collect { |h| h.sort { |a, b| a <=> b }.to_h}.sort { |a, b| a[key] <=> b[key] }
end

sorted_hashes([{'a' => 2}, {'a' => 1}], 'a') # return [{'a' => 1}, {'a' => 2}]
sorted_hashes([{a: 1}, {a: 5}, {a: 3}], :a) # return [{a: 1}, {a: 3}, {a: 5}]
sorted_hashes([{a: 1, b: 1}, {a: 1}, {a: 3}], :a) # return [{a: 1, b: 1}, {a: 1}, {a: 3}]
sorted_hashes([{a: 1}, {a: 1, b: 1}, {a: 3}], :a) # return [{a: 1}, {a: 1, b: 1}, {a: 3}]
sorted_hashes([{"id" => 2}, {"id" => 1}], "id") # return [{"id" => 1}, {"id" => 2}]
sorted_hashes([{b: 3, a: 5}, {a: 3}, {a: 2}, {a: 9}], :a) # return [{a: 2}, {a: 3}, {a: 5, b: 3}, {a: 9}]
