# https://www.codewars.com/kata/554ca54ffa7d91b236000023
def delete_nth(order,max_e)
  result = []

  # Each item in `order` will be initialized with a value of 0, so you can immediately begin adding occurences.
  order.each_with_object(Hash.new(0)) do |num, count|
    count[num] += 1
    result.push(num) if count[num] <= max_e
  end
  
  result
end

delete_nth([20,37,20,21], 1) # return [20, 37, 21]
